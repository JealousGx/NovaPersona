import { mysqlTable } from "drizzle-orm/mysql-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";

import * as mysql from "drizzle-orm/mysql-core";
import * as sqlite from "drizzle-orm/sqlite-core";

const dbType = process.env.DB_TYPE || "sqlite";

export function createTable(name: string, columns: any) {
  if (dbType === "mysql") {
    return mysqlTable(name, columns);
  }

  return sqliteTable(name, columns);
}

export const col = {
  text: (name: string, length?: number) =>
    dbType === "mysql"
      ? mysql.varchar(name, { length: length || 255 })
      : sqlite.text(name),

  int: (name: string) =>
    dbType === "mysql" ? mysql.int(name) : sqlite.integer(name),

  serial: (name: string) =>
    dbType === "mysql"
      ? mysql.serial(name)
      : sqlite
          .integer(name, { mode: "number" })
          .primaryKey({ autoIncrement: true }),

  timestamp: (name: string) =>
    dbType === "mysql"
      ? mysql.timestamp(name)
      : sqlite.integer(name, { mode: "timestamp" }),

  json: (name: string) =>
    dbType === "mysql" ? mysql.json(name) : sqlite.text(name),
};
