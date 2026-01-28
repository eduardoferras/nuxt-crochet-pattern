import type { BetterFetchResponse } from 'better-auth/vue'

declare global {
	type AuthClientError = NonNullable<BetterFetchResponse<unknown>>['error'] & { code?: string }
}
