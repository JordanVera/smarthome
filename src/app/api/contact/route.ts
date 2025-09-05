import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Save contact record to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    // Log the successful submission
    console.log('Contact form submission saved:', contact);

    // TODO: Implement email sending logic here
    // For now, we'll just return a success response

    return NextResponse.json(
      { message: 'Message received successfully', id: contact.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Error processing your request' },
      { status: 500 }
    );
  }
};
