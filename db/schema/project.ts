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
 * projects
 * - User-linked projects displayed in portfolio
 */
export const project = mysqlTable(
  "project",
  {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    project_name: varchar("project_name", { length: 255 }).notNull(),
    description: text("description"),
    project_url: varchar("project_url", { length: 512 }),
    repo_url: varchar("repo_url", { length: 512 }),
    visible: int("visible").default(1), // 1 visible, 0 hidden
    order_index: int("order_index").default(0),
    created_at: timestamp("created_at").defaultNow(),
  },
  (t) => [
    index("projects_user_id_idx").on(t.user_id),
    index("projects_project_name_idx").on(t.project_name),
  ]
);
