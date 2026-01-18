import { env } from "@config/env.config.ts";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./src/db/schemas/index.ts",
	out: "./src/db/migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: env.DB_URL,
	},
	migrations: {
		schema: "public",
	},
});
