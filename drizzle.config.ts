import { defineConfig } from 'drizzle-kit'
export default defineConfig({
 schema: "./db/schema.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString: "postgres://postgres:example@localhost:5432/postgres",
  },
  verbose: true,
  strict: true,
})