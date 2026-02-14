import emailQueue from "@queues/email.queue.ts";
import { FeedbackNotificationEmail } from "@rdc/transactional";
import { render } from "@react-email/render";
import type { FeedbackSchema } from "@validations/feedback.validation.ts";
import type EmailPayload from "@/types/email.types.ts";

export async function addFeedbackJob(data: FeedbackSchema) {
	try {
		const { screenshot, feedback, type } = data;
		const subject = "Feedback Recebido - Receitas de Crochê";
		const to = "eduardo@ftndigital.com.br";
		const body = await render(FeedbackNotificationEmail({ feedback, type }));

		const FeedbackEmailPayload: EmailPayload = {
			to,
			subject,
			body,
		};

		if (screenshot) {
			const base64Data = screenshot.replace(/^data:image\/jpeg;base64,/, "");
			const screenshotBuffer = Buffer.from(base64Data, "base64");

			FeedbackEmailPayload.attachments = [
				{
					filename: "screenshot.jpeg",
					content: screenshotBuffer,
				},
			];
		}

		await emailQueue.add("sendEmail", FeedbackEmailPayload, {
			attempts: 3,
			backoff: {
				type: "exponential",
				delay: 2000,
			},
			removeOnComplete: true,
			removeOnFail: false,
		});
	} catch (error) {
		console.error("Error adding feedback job:", error);
		throw error;
	}
}
