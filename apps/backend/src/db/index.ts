import { env } from "@config/env.config.ts";
import * as schema from "@db/schemas/index.ts";
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle(env.DB_URL, { schema });

export default db;
