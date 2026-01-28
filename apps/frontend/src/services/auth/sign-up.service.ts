import type { SignUp } from '@interfaces/sign-up.interface'

export default async function signUp({ fullName, email, password }: SignUp) {
	const { $signUp } = useNuxtApp()

	const { error } = await $signUp.email({
		email,
		password,
		name: fullName
	})

	if (error) {
		throw error
	}
}
