import { drizzle as drizzleMySQL } from "drizzle-orm/mysql2";

export const db = drizzleMySQL(process.env.DATABASE_URL!);
