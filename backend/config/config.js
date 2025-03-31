import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// 👇 create __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

console.log("Loaded DB_USER:", process.env.DB_USER);

export default {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "company",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || "postgres",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || "postgres",
  },
};
