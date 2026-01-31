import type { SessionResponse } from '~/types/session-response'
import authRoutes from '~/utils/auth-routes'

export default defineEventHandler(async (event) => {
	const urlsPath = event.node.req.url
	const cookiesHeaders = event.node.req.headers.cookie
	const config = useRuntimeConfig()

	if (urlsPath && authRoutes.includes(urlsPath) && cookiesHeaders) {
		try {
			const session = await $fetch<SessionResponse>(config.public.apiUrl + '/auth/me', {
				headers: Object.fromEntries([['cookie', cookiesHeaders]])
			})

			if (session && session.user) {
				sendRedirect(event, '/')
			}
		} catch (error) {
			console.error('Erro ao buscar sessão em /auth/me:', error)
		}
	}
})
