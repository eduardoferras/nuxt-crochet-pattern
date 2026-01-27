import { z } from 'zod'

export const feedbackZodSchema = z.object({
	feedback: z
		.string({ error: '*Preencha esse campo' })
		.nonempty({ message: '*Preencha esse campo' })
})
