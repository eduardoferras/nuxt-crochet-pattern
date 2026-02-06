import type { ResetPassword } from '@interfaces/reset-password.interface'

export default async function resetPassword({ password }: ResetPassword) {
	const { $resetPassword } = useNuxtApp()
	const route = useRoute()
	const token = route.query.token ? route.query.token.toString() : ''

	const { error } = await $resetPassword({
		newPassword: password,
		token
	})

	if (error) {
		throw error
	}
}
