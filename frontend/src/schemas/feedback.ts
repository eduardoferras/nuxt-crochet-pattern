import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const feedbackZodSchema = z.object({
	feedback: z
		.string({ required_error: '*Preencha esse campo' })
		.nonempty({ message: '*Preencha esse campo' })
})

export const feedbackSchema = toTypedSchema(feedbackZodSchema)
