import { baseAuthSchema } from '@validations/base-auth.validation'

export const forgotPasswordSchema = baseAuthSchema.pick({
	email: true
})
