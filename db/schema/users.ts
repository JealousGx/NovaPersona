import {
  index,
  int,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * users
 * - Stores basic user account + onboarding info
 */
export const users = mysqlTable(
  "users",
  {
    id: serial("id"), // PK
    email: varchar("email", { length: 255 }).notNull().unique(), // unique
    password_hash: varchar("password_hash", { length: 512 }), // nullable for social-only accounts
    full_name: varchar("full_name", { length: 255 }),
    professional_title: varchar("professional_title", { length: 255 }),
    has_onboarded: int("has_onboarded").default(0), // boolean-ish as integer for sqlite
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (t) => [index("user_email_idx").on(t.email)]
);
