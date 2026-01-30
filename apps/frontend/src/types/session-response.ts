import type { sessionMiddleware } from 'better-auth/api'

type RawSessionResponse = Awaited<ReturnType<typeof sessionMiddleware>>
export type SessionResponse = {
	session: RawSessionResponse['session']['session']
	user: RawSessionResponse['session']['user']
}
