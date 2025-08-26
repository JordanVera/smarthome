import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { Webhook } from 'svix';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your webhook secret
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || '');

  let evt: WebhookEvent;

  // Verify the webhook payload
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  // Handle the webhook
  const eventType = evt.type;

  // Log the full payload for debugging
  console.log('Webhook payload:', JSON.stringify(evt.data, null, 2));

  if (eventType === 'user.created') {
    const {
      id,
      email_addresses,
      username,
      first_name,
      last_name,
      external_accounts,
    } = evt.data;

    // Get the user's primary email
    const primaryEmail = email_addresses?.[0]?.email_address;

    if (!primaryEmail) {
      return new Response('No email address found', {
        status: 400,
      });
    }

    // Determine the auth provider
    let authProvider = 'email';
    if (external_accounts && external_accounts.length > 0) {
      // The provider information is in the external_accounts array
      // It will contain the OAuth provider (e.g., 'google', 'apple', etc.)
      authProvider = external_accounts[0].provider;
    }

    try {
      // Create a new user in your database
      const user = await prisma.user.create({
        data: {
          clerkId: id,
          email: primaryEmail,
          name:
            username ||
            [first_name, last_name].filter(Boolean).join(' ') ||
            null,
          authProvider: authProvider,
        },
      });

      return new Response(JSON.stringify({ user }), {
        status: 201,
      });
    } catch (error) {
      console.error('Error creating user:', error);
      return new Response('Error creating user', {
        status: 500,
      });
    }
  }

  return new Response('', { status: 200 });
}
