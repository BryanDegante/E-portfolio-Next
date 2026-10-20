
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedServices = new Set([
  'Business Website',
  'Website Redesign',
  'Custom Features',
  'Other Inquiry',
  'Sitio Web para Negocio',
  'Rediseño de Sitio Web',
  'Funciones Personalizadas',
  'Otra Consulta',
]);

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !recipient) {
      console.error('Contact email environment variables are missing.');

      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const body: unknown = await request.json();

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body.' },
        { status: 400 }
      );
    }

    const { name, email, service, message } = body as Record<
      string,
      unknown
    >;

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof service !== 'string' ||
      typeof message !== 'string'
    ) {
      return NextResponse.json(
        { error: 'Please provide all required fields.' },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (
      !cleanName ||
      cleanName.length > 100 ||
      !cleanEmail ||
      cleanEmail.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
      !allowedServices.has(service) ||
      !cleanMessage ||
      cleanMessage.length > 5000
    ) {
      return NextResponse.json(
        { error: 'Please check your form fields and try again.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Bryan Degante <contact@bryandegante.dev>',
      to: [recipient],
      replyTo: cleanEmail,
      subject: `Portfolio inquiry: ${service}`,
      text: [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Service: ${service}`,
        '',
        'Message:',
        cleanMessage,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend delivery error:', error.message);

      return NextResponse.json(
        { error: 'Unable to send your message right now.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
