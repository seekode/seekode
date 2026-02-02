import {
	GMAIL_CLIENT_ID,
	GMAIL_CLIENT_SECRET,
	GMAIL_REFRESH_TOKEN,
	GMAIL_USER
} from '$env/static/private';
import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { RequestHandler } from './$types';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type: 'OAuth2',
		user: GMAIL_USER,
		clientId: GMAIL_CLIENT_ID,
		clientSecret: GMAIL_CLIENT_SECRET,
		refreshToken: GMAIL_REFRESH_TOKEN
	}
});

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { firstName, lastName, email, phone } = await request.json();

		if (!firstName || !lastName || !email || !phone) {
			console.log('[Contact] Error: Missing required fields');
			return json({ success: false, error: 'Missing required fields' }, { status: 400 });
		}

		const mailOptions = {
			from: `"Seekode Contact" <${GMAIL_USER}>`,
			to: 'nicolas@seekode.dev',
			replyTo: email,
			subject: `Nouveau contact: ${firstName} ${lastName}`,
			text: `
      Nouveau message de contact:

      Nom: ${firstName} ${lastName}
      Email: ${email}
      Téléphone: ${phone}
			`.trim(),
			html: `
				<h2>Nouveau message de contact</h2>
				<p><strong>Nom:</strong> ${firstName} ${lastName}</p>
				<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
				<p><strong>Téléphone:</strong> <a href="tel:${phone.replace(/\s/g, '')}">${phone}</a></p>
			`
		};

		await transporter.sendMail(mailOptions);
		console.log('[Contact] Success: Email sent to nicolas@seekode.dev');

		return json({ success: true });
	} catch (error) {
		console.log('[Contact] Error:', error);
		return json({ success: false, error: 'Failed to send email' }, { status: 500 });
	}
};
