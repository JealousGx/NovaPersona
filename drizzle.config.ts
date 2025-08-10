import { Config, defineConfig } from "drizzle-kit";

const dbType = process.env.DB_TYPE || "sqlite";

let dialect: Config["dialect"];
let dbCredentials: { url: string };

if (dbType === "mysql") {
  dialect = "mysql";
  dbCredentials = {
    url: process.env.DATABASE_URL!,
  };
} else {
  dialect = "sqlite";
  dbCredentials = {
    url: process.env.DB_FILE_NAME || "./db.sqlite",
  };
}

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema/**/*.{ts,js}",
  dialect,
  dbCredentials,
});
