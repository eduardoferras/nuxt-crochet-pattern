import Index from '@/pages/index.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

describe('index.vue', () => {
	it('should render the main title correctly', async () => {
		const wrapper = await mountSuspended(Index)

		const title = wrapper.find('h1')

		expect(title.exists()).toBe(true)
		expect(title.text()).toBe('Receitas de Crochê')
	})

	it('should contain all expected subtitles', async () => {
		const wrapper = await mountSuspended(Index)

		const subtitles = wrapper.findAll('h2')

		const expectedSubtitles = ['Últimos Lançamentos']

		expect(subtitles.length).toBe(expectedSubtitles.length)

		subtitles.forEach((subtitle, index) => {
			expect(subtitle.text()).toBe(expectedSubtitles[index])
		})
	})
})
