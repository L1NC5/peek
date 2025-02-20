import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: './db/schema.ts',
    dbCredentials: { 
        url: process.env.DATABASE_URL,
    }
})