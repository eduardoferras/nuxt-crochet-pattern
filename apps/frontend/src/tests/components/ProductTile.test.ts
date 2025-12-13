import { describe, expect, it } from 'vitest'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import ProductTile from '@components/ProductTile.vue'
import mockProducts from '@/tests/mocks/products.mock'

mockNuxtImport('useFetch', () => {
	return async () => ({
		data: mockProducts
	})
})

describe('ProductTile', () => {
	it('should render products correctly', async () => {
		const wrapper = await mountSuspended(ProductTile)

		const items = wrapper.findAll('[data-test="product-card"]')

		expect(items).toHaveLength(2)
	})

	it('should render price with two decimal places', async () => {
		const wrapper = await mountSuspended(ProductTile)

		const priceElements = wrapper.findAll('[data-test="product-price"]')

		priceElements.forEach((price) => {
			const match = price.text().match(/R\$ (\d+),(\d+)/)

			expect(match).toBeTruthy()
			expect(match![2]).toHaveLength(2)
		})
	})

	it('should render WhatsApp buy link correctly', async () => {
		const wrapper = await mountSuspended(ProductTile)

		const items = wrapper.findAll('[data-test="product-card"]')

		items.forEach((item) => {
			const link = item.find('a')
			const href = link.attributes('href') as string

			expect(link.exists()).toBe(true)
			expect(href).toContain('https://wa.me/')
		})
	})

	it('should render a product image correctly', async () => {
		const wrapper = await mountSuspended(ProductTile)

		const items = wrapper.findAll('[data-test="product-card"]')

		items.forEach((item) => {
			const productImage = item.find('img')

			expect(productImage.exists()).toBe(true)
		})
	})
})
