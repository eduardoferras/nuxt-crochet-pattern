import { baseAuthSchema } from '@validations/base-auth.validation'
import z from 'zod'

export const signInSchema = baseAuthSchema
	.pick({
		email: true,
		password: true
	})
	.extend({
		rememberMe: z.boolean().default(true)
	})
