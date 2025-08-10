import {
  index,
  int,
  mysqlTable,
  serial,
  varchar,
} from "drizzle-orm/mysql-core";
import { users } from "./users";

/**
 * skills
 * - Simple mapping of user -> skill
 */
export const skills = mysqlTable(
  "skills",
  {
    id: serial("id"),
    user_id: int("user_id")
      .notNull()
      .references(() => users.id),
    skill_name: varchar("skill_name", { length: 255 }).notNull(),
    proficiency: int("proficiency").default(0), // 0-100 or small scale
    order_index: int("order_index").default(0),
  },
  (t) => [
    index("skills_user_id_idx").on(t.user_id),
    index("skills_skill_name_idx").on(t.skill_name),
  ]
);
