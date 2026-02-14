import { env } from "@config/env.config.ts";
import { Resend } from "resend";
import type EmailPayload from "@/types/email.types.ts";
export default async function sendEmail({
	to,
	subject,
	body,
	attachments,
}: EmailPayload) {
	try {
		const resend = new Resend(env.RESEND_API_KEY);

		const response = await resend.emails.send({
			from: env.MAIL_SENDER,
			to,
			subject,
			html: body,
			attachments,
		});

		if (response.error) {
			throw new Error(`Resend error: ${response.error.message}`);
		}
	} catch (error) {
		console.error("Error sending email:", error);
		throw error;
	}
}
