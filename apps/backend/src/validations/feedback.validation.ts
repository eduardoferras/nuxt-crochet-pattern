import { z } from "zod";

export const FeedbackTypeEnum = z.enum(["Problemas", "Ideias", "Outros"]);
export type FeedbackType = z.infer<typeof FeedbackTypeEnum>;

export const feedbackZodSchema = z.object({
	feedback: z.string({ error: "*Preencha esse campo" }),
	type: FeedbackTypeEnum,
	screenshot: z
		.string()
		.optional()
		.refine((value) => !value || value.startsWith("data:image/jpeg;base64,"), {
			error: "Print deve ser uma imagem JPEG",
		}),
});

export type FeedbackSchema = z.infer<typeof feedbackZodSchema>;
