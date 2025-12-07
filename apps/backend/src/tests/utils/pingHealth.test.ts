import { describe, expect, it, vi } from "vitest";
import pingHealth from "@/utils/pingHealth.ts";

describe("pingHealth", () => {
	it("should return 200 when fetch succeeds", async () => {
		global.fetch = vi.fn(() =>
			Promise.resolve({ status: 200 } as Response),
		) as any;

		const status = await pingHealth();
		expect(status).toBe(200);
	});

	it("should throw an error when fetch fails", async () => {
		global.fetch = vi.fn(() =>
			Promise.reject(new Error("Fail network")),
		) as any;

		await expect(pingHealth()).rejects.toThrow("Fail network");
	});
});
