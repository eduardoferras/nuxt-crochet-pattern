import AppHeader from '@/components/AppHeader.vue'
import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('AppHeader.vue', () => {
	it('should render the component correctly', async () => {
		const wrapper = await mountSuspended(AppHeader)

		expect(wrapper.find('header').exists()).toBe(true)
	})

	it('should render a link to the homepage', async () => {
		const wrapper = await mountSuspended(AppHeader)

		const link = wrapper.find('a[href="/"]')

		expect(link.exists()).toBe(true)
	})

	it('should render a logo with aria-label text', async () => {
		const wrapper = await mountSuspended(AppHeader)

		const logo = wrapper.find('[role="img"]')

		expect(logo.attributes('aria-label')).toBe('Logo Receitas de Crochê')
	})

	it('should render the website description', async () => {
		const wrapper = await mountSuspended(AppHeader)

		const description = wrapper.find('p')

		expect(description.exists()).toBe(true)
		expect(description.text()).toBe(
			'Receitas de Crochê para Vestuário, Amigurumi e Datas Comemorativas'
		)
	})
})
