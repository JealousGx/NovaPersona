import {
  index,
  int,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { users } from "./users";

/**
 * resume_files
 * - Stores uploaded resume file metadata (R2 url etc)
 */
export const resume_files = mysqlTable(
  "resume_files",
  {
    id: serial("id"),
    user_id: int("user_id")
      .notNull()
      .references(() => users.id),
    file_url: varchar("file_url", { length: 1024 }).notNull(),
    file_name: varchar("file_name", { length: 255 }),
    mime_type: varchar("mime_type", { length: 64 }),
    size_bytes: int("size_bytes"),
    extracted_text_id: int("extracted_text_id"), // optional FK to profiles.id if you want a link
    uploaded_at: timestamp("uploaded_at").defaultNow(),
  },
  (t) => [
    index("resume_files_user_id_idx").on(t.user_id),
    index("resume_files_extracted_text_id_idx").on(t.extracted_text_id),
  ]
);
