import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
}

const db = drizzle(process.env.DATABASE_URL);
