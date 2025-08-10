import {
  index,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { users } from "./users";

/**
 * profiles
 * - Linked resume text + LinkedIn url, additional public profile data
 */
export const profiles = mysqlTable(
  "profiles",
  {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    resume_text: text("resume_text"), // extracted resume content
    linkedin_url: varchar("linkedin_url", { length: 512 }),
    public_bio: text("public_bio"),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (t) => [index("profiles_user_id_idx").on(t.user_id)]
);
