import { z } from "zod";

const domainRoot = new URL(process.env.FRONTEND_URL ?? "http://localhost:3000")
	.hostname;

const envSchema = z.object({
	PORT: z.coerce.number().default(3002),
	SERVER_URL: z.url(),
	FRONTEND_URL: z.url().default("http://localhost:3000"),
	MAIL_SENDER: z.string(),
	RESEND_API_KEY: z.string(),
	REDIS_HOST: z.string(),
	REDIS_PORT: z.coerce.number().default(6379),
	BETTER_AUTH_SECRET: z.string(),
	BETTER_AUTH_URL: z.url(),
	DB_USERNAME: z.string(),
	DB_PASSWORD: z.string(),
	DB_DATABASE: z.string(),
	DB_URL: z.url(),
	PGADMIN_USERNAME: z.string(),
	PGADMIN_PASSWORD: z.string(),
	NODE_ENV: z.string(),
	DOMAIN_ROOT: z.string().default(domainRoot),
});

export const env = envSchema.parse(process.env);
