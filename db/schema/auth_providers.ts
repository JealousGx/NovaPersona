import {
  index,
  json,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { users } from "./users";

/**
 * auth_providers
 * - Maps social auth ids to local users (Google, GitHub, etc.)
 */
export const auth_providers = mysqlTable(
  "auth_providers",
  {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    provider: varchar("provider", { length: 32 }).notNull(), // e.g., 'google', 'github'
    provider_user_id: varchar("provider_user_id", { length: 255 }).notNull(),
    provider_data: json("provider_data"), // raw provider JSON if needed
    created_at: timestamp("created_at").defaultNow(),
  },
  (t) => [index("auth_providers_user_id_idx").on(t.user_id)]
);
