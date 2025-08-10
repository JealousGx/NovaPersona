import {
  index,
  int,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { users } from "./users";

/**
 * experiences
 * - Work experience rows tied to a user
 */
export const experiences = mysqlTable(
  "experiences",
  {
    id: serial("id"),
    user_id: int("user_id")
      .notNull()
      .references(() => users.id),
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
