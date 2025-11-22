import emailQueue from "@queues/email.queue.ts";

export async function addFeedbackJob(feedback: string) {
	try {
		const subject = "Novo feedback recebido";
		const to = "eduardo@ftndigital.com.br";
		const body = `<p>Você recebeu um novo feedback:</p><p>${feedback}</p>`;

		await emailQueue.add(
			"sendEmail",
			{
				to,
				subject,
				body,
			},
			{
				attempts: 3,
				backoff: {
					type: "exponential",
					delay: 2000,
				},
				removeOnComplete: true,
				removeOnFail: false,
			}
		);
	} catch (error) {
		console.error("Error adding feedback job:", error);
		throw error;
	}
}
