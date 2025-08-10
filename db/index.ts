import { drizzle as drizzleSQLite } from "drizzle-orm/libsql";
import { drizzle as drizzleMySQL } from "drizzle-orm/mysql2";

let db;

if (
  process.env.DB_TYPE === "sqlite" ||
  process.env.NODE_ENV === "development"
) {
  db = drizzleSQLite({
    connection: {
      url: process.env.DATABASE_URL!,
      authToken: process.env.DATABASE_AUTH_TOKEN!,
    },
  });
} else {
  db = drizzleMySQL(process.env.DATABASE_URL!);
}

export { db };
