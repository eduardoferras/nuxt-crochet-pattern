import { describe, it, expect } from 'vitest'
import PrivacyPolicy from '@/pages/politica-de-privacidade.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('politica-de-privacidade.vue', () => {
	it('should render the main title correctly', async () => {
		const wrapper = await mountSuspended(PrivacyPolicy)

		const title = wrapper.find('h1')

		expect(title.exists()).toBe(true)
		expect(title.text()).toBe('Política de Privacidade')
	})

	it('should contain all expected subtitles', async () => {
		const wrapper = await mountSuspended(PrivacyPolicy)

		const subtitles = wrapper.findAll('h2')

		const expectedSubtitles = [
			'Coleta de Informações Pessoais',
			'Dados de Publicidade Online',
			'Dados de Navegação no Site',
			'Sites Externos'
		]

		expect(subtitles.length).toBe(expectedSubtitles.length)

		subtitles.forEach((subtitle, index) => {
			expect(subtitle.text()).toBe(expectedSubtitles[index])
		})
	})

	it('should render a <p> immediately after each <h2>', async () => {
		const wrapper = await mountSuspended(PrivacyPolicy)
		const h2Elements = wrapper.findAll('h2')

		h2Elements.forEach((h2) => {
			const next = h2.element.nextElementSibling

			expect(next).toBeTruthy()
			expect(next?.tagName.toLowerCase()).toBe('p')
		})
	})
})
