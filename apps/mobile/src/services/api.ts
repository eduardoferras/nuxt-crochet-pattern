const API_URL = process.env.EXPO_PUBLIC_API_URL as string;

export async function fetchProducts() {
	const res = await fetch(`${API_URL}/products`);
	return res.json();
}
