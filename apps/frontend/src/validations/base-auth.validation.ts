import { confirmPasswordSchema, emailSchema, passwordSchema } from '@validations/fields'
import z from 'zod'

export const baseAuthSchema = z.object({
	fullName: z.string({ error: 'Nome é obrigatório' }).nonempty({ error: 'Nome é obrigatório' }),
	email: emailSchema,
	password: passwordSchema,
	confirmPassword: confirmPasswordSchema
})
