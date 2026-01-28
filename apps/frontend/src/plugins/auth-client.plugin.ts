import { createAuthClient } from 'better-auth/vue'

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig()

	const authClient = createAuthClient({
		baseURL: config.public.apiUrl,
		basePath: '/auth'
	})

	return {
		provide: {
			authClient,
			signUp: authClient.signUp,
			signIn: authClient.signIn,
			signOut: authClient.signOut
		}
	}
})
