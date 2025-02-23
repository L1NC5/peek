import { z } from "zod";
import dotenv from "dotenv";
// Load environment variables
dotenv.config();
// Define the schema as an object with all of the env
// variables and their types
const envSchema = z.object({
	DATABASE_URL: z.string(),
});
// Check that the environment variables are valid and export
export const env = envSchema.parse(process.env);
