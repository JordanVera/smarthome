import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    // Log the request body
    console.log('Contact form submission:', body);

    // TODO: Implement email sending logic here
    // For now, we'll just return a success response

    return NextResponse.json(
      { message: 'Message received successfully' },
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
