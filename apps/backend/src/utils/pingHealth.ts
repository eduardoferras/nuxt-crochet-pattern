export default async function pingHealth() {
	try {
		const res = await fetch(`${process.env.HEALTH_CHECK_URL}`);
		console.log("Health check response:", res.status);
		return res.status;
	} catch (err: unknown) {
		if (err instanceof Error) {
			console.error("Health check error:", err.message);
		} else {
			console.error("Unknown error:", err);
		}

		throw err;
	}
}
