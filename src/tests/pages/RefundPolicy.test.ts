import { describe, it, expect } from 'vitest'
import RefundPolicy from '@/pages/politica-de-troca-devolucao-e-reembolso.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('politica-de-troca-devolucao-e-reembolso.vue', () => {
	it('should render the main title correctly', async () => {
		const wrapper = await mountSuspended(RefundPolicy)

		const title = wrapper.find('h1.RefundPolicy__title')

		expect(title.exists()).toBe(true)
		expect(title.text()).toBe('Política de Troca, Devolução e Reembolso')
	})

	it('should contain all expected subtitles', async () => {
		const wrapper = await mountSuspended(RefundPolicy)

		const subtitles = wrapper.findAll('h2.RefundPolicy__subtitle')

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

	it('should render paragraphs correctly', async () => {
		const wrapper = await mountSuspended(RefundPolicy)

		const paragraphs = wrapper.findAll('p.RefundPolicy__text')

		expect(paragraphs.length).toBeGreaterThan(0)
	})
})
