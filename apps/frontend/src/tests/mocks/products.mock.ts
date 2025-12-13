import type Product from '@/types/Product'

const mockProducts: Product[] = [
	{
		id: 1,
		name: 'Product 1',
		price: 44.9993,
		image: 'https://example.com/product1.jpg',
		seller: {
			name: 'Fulano'
		}
	},
	{
		id: 2,
		name: 'Product 2',
		price: 55.99,
		image: 'https://example.com/product2.jpg',
		seller: {
			name: 'Fulano'
		}
	}
]

export default mockProducts
