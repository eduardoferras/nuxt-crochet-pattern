import EmailPayload from "@/types/email.types.ts";
import { Resend } from "resend";
export default async function sendEmail({ to, subject, body }: EmailPayload) {
	try {
		const resend = new Resend(process.env.RESEND_API_KEY!);

		const response = await resend.emails.send({
			from: process.env.MAIL_SENDER!,
			to,
			subject,
			html: body,
		});

		if (response.error) {
			throw new Error(`Resend error: ${response.error.message}`);
		}
	} catch (error) {
		console.error("Error sending email:", error);
		throw error;
	}
}
