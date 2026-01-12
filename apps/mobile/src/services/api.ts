import env from "@/env";

export async function fetchProducts() {
	const res = await fetch(`${env.EXPO_PUBLIC_API_URL}/products`);
	return res.json();
}
