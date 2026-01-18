import { z } from "zod";

const envSchema = z.object({
	PORT: z.coerce.number().default(3002),
	SERVER_URL: z.string().url(),
	FRONTEND_URL: z.string().url().default("http://localhost:3000"),
	HEALTH_CHECK_URL: z.string().url(),
	MAIL_SENDER: z.string(),
	RESEND_API_KEY: z.string(),
	REDIS_HOST: z.string(),
	REDIS_PORT: z.coerce.number().default(6379),
	BETTER_AUTH_SECRET: z.string(),
	BETTER_AUTH_URL: z.string().url(),
	DB_USERNAME: z.string(),
	DB_PASSWORD: z.string(),
	DB_DATABASE: z.string(),
	DB_URL: z.string().url(),
	PGADMIN_USERNAME: z.string(),
	PGADMIN_PASSWORD: z.string(),
});

export const env = envSchema.parse(process.env);
