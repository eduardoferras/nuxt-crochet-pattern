import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import ProductTile from '@components/ProductTile.vue'
import mockProducts from '@/tests/mocks/products.mock'
import type { VueWrapper } from '@vue/test-utils'

const trackEventSpy = vi.fn()

mockNuxtImport('useFetch', () => {
	return async () => ({
		data: mockProducts
	})
})

mockNuxtImport('useGtm', () => {
	return () => ({
		trackEvent: trackEventSpy
	})
})

const findWhatsAppBtn = (wrapper: VueWrapper) => wrapper.find('button.btn--whatsapp')

let wrapper: VueWrapper

beforeEach(async () => {
	wrapper = await mountSuspended(ProductTile)
})

afterEach(() => {
	vi.restoreAllMocks()
	trackEventSpy.mockClear()
})

describe('ProductTile', () => {
	it('should render products correctly', async () => {
		const items = wrapper.findAll('[data-test="product-card"]')

		expect(items).toHaveLength(2)
	})

	it('should render price with two decimal places', async () => {
		const priceElements = wrapper.findAll('[data-test="product-price"]')

		priceElements.forEach((price) => {
			const match = price.text().match(/R\$ (\d+),(\d+)/)

			expect(match).toBeTruthy()
			expect(match![2]).toHaveLength(2)
		})
	})

	it('should render WhatsApp button correctly', async () => {
		const whatsAppBtn = findWhatsAppBtn(wrapper)

		expect(whatsAppBtn.exists()).toBe(true)
	})

	it('should dispatch gtm trackEvent event when WhatsApp button is clicked', async () => {
		const whatsAppBtn = findWhatsAppBtn(wrapper)

		await whatsAppBtn.trigger('click')

		expect(trackEventSpy).toHaveBeenCalledWith({
			event: 'generate_lead',
			currency: 'BRL',
			value: mockProducts[0].price
		})
	})

	it('should open WhatsApp chat when WhatsApp button is clicked', async () => {
		const whatsAppBtn = findWhatsAppBtn(wrapper)

		const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)

		await whatsAppBtn.trigger('click')

		expect(openSpy).toHaveBeenCalledWith(expect.stringContaining('https://wa.me/'), '_blank')
	})

	it('should render a product image correctly', async () => {
		const product = wrapper.find('[data-test="product-card"]')

		const productImage = product.find('img')

		expect(productImage.exists()).toBe(true)
		expect(productImage.attributes('src')).toBeTruthy()
		expect(productImage.attributes('alt')).toBe(mockProducts[0].name)
	})
})
