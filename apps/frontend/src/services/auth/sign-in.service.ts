import type { SignIn } from '@interfaces/sign-in.interface'

export default async function signIn({ email, password, rememberMe }: SignIn) {
	const { $signIn } = useNuxtApp()

	const { error } = await $signIn.email({
		email,
		password,
		rememberMe
	})

	if (error) {
		throw error
	}
}
