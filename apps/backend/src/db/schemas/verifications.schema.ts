import { timestamps } from "@db/helpers/columns.helpers.ts";
import { index, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const verifications = pgTable(
	"verifications",
	{
		id: text("id").primaryKey(),
		identifier: text("identifier").notNull(),
		value: text("value").notNull(),
		expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
		...timestamps,
	},
	(table) => [index("verifications_identifier_idx").on(table.identifier)],
);
