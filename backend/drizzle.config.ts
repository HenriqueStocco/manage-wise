import { defineConfig } from "drizzle-kit";
import envSchema from "./utils/env"

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/**/schemas.ts",
  out: "./src/migrations",
  driver: "pglite",
  dbCredentials: {
    url: envSchema.DB_URL
  }
});