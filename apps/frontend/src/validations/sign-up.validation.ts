import { baseAuthSchema } from '@validations/base-auth.validation'

export const signUpSchema = baseAuthSchema.superRefine(({ password, confirmPassword }, ctx) => {
	if (password !== confirmPassword) {
		ctx.addIssue({
			code: 'custom',
			message: 'Senhas precisam ser iguais',
			path: ['confirmPassword']
		})
	}
})
