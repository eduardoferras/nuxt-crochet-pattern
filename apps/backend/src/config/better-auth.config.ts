import { env } from "@config/env.config.ts";
import db from "@db/index.ts";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { jwt, openAPI } from "better-auth/plugins";

export const auth = betterAuth({
	trustedOrigins: [env.FRONTEND_URL],
	database: drizzleAdapter(db, {
		provider: "pg",
		usePlural: true,
	}),
	basePath: "/auth",
	plugins: [
		jwt({
			schema: {
				jwks: {
					modelName: "jwk",
				},
			},
		}),
		openAPI(),
	],
	emailAndPassword: {
		enabled: true,
	},
});
