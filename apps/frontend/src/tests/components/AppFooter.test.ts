import AppFooter from '@/components/AppFooter.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

describe('AppFooter.vue', () => {
	it('should render the footer component correctly', async () => {
		const wrapper = await mountSuspended(AppFooter)

		expect(wrapper.find('footer').exists()).toBe(true)
	})

	it('should render a link to the homepage', async () => {
		const wrapper = await mountSuspended(AppFooter)

		const link = wrapper.find('a[href="/"]')

		expect(link.exists()).toBe(true)
	})

	it('should render a logo with aria-label text', async () => {
		const wrapper = await mountSuspended(AppFooter)
		const logo = wrapper.find('[aria-label="Logo Receitas de Crochê"]')

		expect(logo.exists()).toBe(true)
	})

	it('should render the website copyright', async () => {
		const currentYear = new Date().getFullYear()
		const wrapper = await mountSuspended(AppFooter)

		const description = wrapper.find('[aria-label="copyright"]')

		expect(description.exists()).toBe(true)
		expect(description.text()).toBe(
			`© 2025 - ${currentYear} Receitas de Crochê. Todos os direitos reservados.`
		)
	})

	it('should render a link to the policies page', async () => {
		const wrapper = await mountSuspended(AppFooter)

		const link = wrapper.find('a[href="/politica-de-privacidade"]')

		expect(link.exists()).toBe(true)
	})

	it('should render a link to the refund page', async () => {
		const wrapper = await mountSuspended(AppFooter)

		const link = wrapper.find('a[href="/politica-de-troca-devolucao-e-reembolso"]')

		expect(link.exists()).toBe(true)
	})
})
