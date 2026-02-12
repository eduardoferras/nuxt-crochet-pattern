import { z } from "zod";

export const feedbackZodSchema = z.object({
	feedback: z
		.string({ error: "*Preencha esse campo" })
		.nonempty({ error: "*Preencha esse campo" }),
});

export type FeedbackSchema = z.infer<typeof feedbackZodSchema>;
