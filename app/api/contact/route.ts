import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedServices = new Set([
	'Job Opportunity',
	'Business Website',
	'Website Redesign',
	'Custom Features',
	'Other Inquiry',
	'Oportunidad Laboral',
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
				{ error: 'EMAIL_SERVICE_NOT_CONFIGURED' },
				{ status: 500 },
			);
		}

		const body: unknown = await request.json();

		if (!body || typeof body !== 'object') {
			return NextResponse.json(
				{ error: 'INVALID_REQUEST_BODY' },
				{ status: 400 },
			);
		}

		const { name, email, service, message } = body as Record<
			string,
			unknown
		>;

		if (typeof name !== 'string' || !name.trim()) {
			return NextResponse.json(
				{ error: 'MISSING_NAME' },
				{ status: 400 },
			);
		}

		if (typeof email !== 'string' || !email.trim()) {
			return NextResponse.json(
				{ error: 'MISSING_EMAIL' },
				{ status: 400 },
			);
		}

		if (typeof service !== 'string' || !service.trim()) {
			return NextResponse.json(
				{ error: 'MISSING_SERVICE' },
				{ status: 400 },
			);
		}

		if (typeof message !== 'string' || !message.trim()) {
			return NextResponse.json(
				{ error: 'MISSING_MESSAGE' },
				{ status: 400 },
			);
		}

		const cleanName = name.trim();
		const cleanEmail = email.trim();
		const cleanService = service.trim();
		const cleanMessage = message.trim();

		if (cleanName.length > 100) {
			return NextResponse.json(
				{ error: 'NAME_TOO_LONG' },
				{ status: 400 },
			);
		}

		if (cleanEmail.length > 254) {
			return NextResponse.json(
				{ error: 'EMAIL_TOO_LONG' },
				{ status: 400 },
			);
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
			return NextResponse.json(
				{ error: 'INVALID_EMAIL' },
				{ status: 400 },
			);
		}

		if (!allowedServices.has(cleanService)) {
			return NextResponse.json(
				{ error: 'INVALID_SERVICE' },
				{ status: 400 },
			);
		}

		if (cleanMessage.length > 5000) {
			return NextResponse.json(
				{ error: 'MESSAGE_TOO_LONG' },
				{ status: 400 },
			);
		}

		const { data, error } = await resend.emails.send({
			from: 'Portfolio <contact@bryandegante.dev>',
			to: [recipient],
			replyTo: cleanEmail,
			template: {
				id: process.env.RESEND_CONTACT_TEMPLATE_ID!,
				variables: {
					NAME: cleanName,
					EMAIL: cleanEmail,
					SERVICE: cleanService,
					MESSAGE: cleanMessage,
				},
			},
		});

		if (error) {
			console.error('Resend delivery error:', error.message);

			return NextResponse.json(
				{ error: 'EMAIL_SEND_FAILED' },
				{ status: 502 },
			);
		}

		return NextResponse.json(
			{ success: true, id: data?.id },
			{ status: 200 },
		);
	} catch (error) {
		console.error('Contact API error:', error);

		return NextResponse.json(
			{ error: 'INTERNAL_SERVER_ERROR' },
			{ status: 500 },
		);
	}
}
