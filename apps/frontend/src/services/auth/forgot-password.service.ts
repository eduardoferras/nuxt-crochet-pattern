import type { ForgotPassword } from '@interfaces/forgot-password.interface'

export default async function forgotPassword({ email }: ForgotPassword) {
	const { $forgotPassword } = useNuxtApp()
	const baseUrl = window.location.origin

	const { error } = await $forgotPassword({
		email,
		redirectTo: `${baseUrl}/redefinir-senha`
	})

	if (error) {
		throw error
	}
}
