import {
  index,
  int,
  mysqlTable,
  serial,
  varchar,
} from "drizzle-orm/mysql-core";
import { user } from "./user";

/**
 * skills
 * - Simple mapping of user -> skill
 */
export const skill = mysqlTable(
  "skill",
  {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    skill_name: varchar("skill_name", { length: 255 }).notNull(),
    proficiency: int("proficiency").default(0), // 0-100 or small scale
    order_index: int("order_index").default(0),
  },
  (t) => [
    index("skills_user_id_idx").on(t.user_id),
    index("skills_skill_name_idx").on(t.skill_name),
  ]
);
