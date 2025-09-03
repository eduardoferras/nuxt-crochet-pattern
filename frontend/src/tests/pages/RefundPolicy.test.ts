import { describe, it, expect } from 'vitest'
import RefundPolicy from '@/pages/politica-de-troca-devolucao-e-reembolso.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('politica-de-troca-devolucao-e-reembolso.vue', () => {
	it('should render the main title correctly', async () => {
		const wrapper = await mountSuspended(RefundPolicy)

		const title = wrapper.find('h1')

		expect(title.exists()).toBe(true)
		expect(title.text()).toBe('Política de Troca, Devolução e Reembolso')
	})

	it('should contain all expected subtitles', async () => {
		const wrapper = await mountSuspended(RefundPolicy)

		const subtitles = wrapper.findAll('h2')

		const expectedSubtitles = [
			'Produtos digitais',
			'Cancelamento e Reembolso',
			'Suporte e Dúvidas',
			'Como esta Política é Aplicada',
			'Concordância com os Termos'
		]

		expect(subtitles.length).toBe(expectedSubtitles.length)

		subtitles.forEach((subtitle, index) => {
			expect(subtitle.text()).toBe(expectedSubtitles[index])
		})
	})

	it('should render a <p> or <ul> immediately after each <h2>', async () => {
		const wrapper = await mountSuspended(RefundPolicy)
		const h2Elements = wrapper.findAll('h2')

		h2Elements.forEach((h2) => {
			const nextEl = h2.element.nextElementSibling

			expect(nextEl).toBeTruthy()

			const tag = nextEl!.tagName.toLowerCase()
			const allowedTags = ['p', 'ul']

			expect(allowedTags).toContain(tag)
		})
	})
})
