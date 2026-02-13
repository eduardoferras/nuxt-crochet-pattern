import type { FeedbackForm } from '@/types/FeedbackForm'

export default async function feedbackService(payload: FeedbackForm) {
	const { apiUrl } = useRuntimeConfig().public

	return await $fetch(`${apiUrl}/feedback`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: payload
	})
}
