import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// for query purposes
const queryClient = postgres("postgres://postgres:example@localhost:5432/postgres");
const db = drizzle(queryClient, {schema});

export {db}