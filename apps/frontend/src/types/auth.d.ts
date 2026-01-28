import type { createAuthClient } from 'better-auth/vue'

declare module 'nuxt/app' {
	interface NuxtApp {
		$authClient: ReturnType<typeof createAuthClient>
		$signUp: ReturnType<typeof createAuthClient>['signUp']
		$signIn: ReturnType<typeof createAuthClient>['signIn']
		$signOut: ReturnType<typeof createAuthClient>['signOut']
	}
}

declare module 'vue' {
	interface ComponentCustomProperties {
		$authClient: ReturnType<typeof createAuthClient>
		$signUp: ReturnType<typeof createAuthClient>['signUp']
		$signIn: ReturnType<typeof createAuthClient>['signIn']
		$signOut: ReturnType<typeof createAuthClient>['signOut']
	}
}
