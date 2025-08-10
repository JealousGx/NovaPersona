import {
  index,
  int,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { user } from "./user";

/**
 * experiences
 * - Work experience rows tied to a user
 */
export const experience = mysqlTable(
  "experience",
  {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    job_title: varchar("job_title", { length: 255 }).notNull(),
    company: varchar("company", { length: 255 }),
    start_date: timestamp("start_date"),
    end_date: timestamp("end_date"),
    currently_working: int("currently_working").default(0),
    description: text("description"),
    order_index: int("order_index").default(0), // for custom ordering in UI
  },
  (t) => [index("experiences_user_id_idx").on(t.user_id)]
);
