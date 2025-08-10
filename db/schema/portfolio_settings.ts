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
 * portfolio_settings
 * - Stores template choices and toggles for the generated portfolio page
 * - visible_sections stored as JSON text for sqlite (native JSON in mysql)
 */
export const portfolio_settings = mysqlTable(
  "portfolio_settings",
  {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    template_id: varchar("template_id", { length: 255 })
      .notNull()
      .default("default"),
    primary_color: varchar("primary_color", { length: 16 }).default("#0ea5a4"),
    visible_sections: json("visible_sections"),
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (t) => [
    index("portfolio_settings_user_id_idx").on(t.user_id),
    index("portfolio_settings_template_id_idx").on(t.template_id),
  ]
);
