import express from "express";
import cors from "cors";
import { rootRoute } from "./app/routes/rootRoute.js";
import { errorHandler } from "./app/middleware/errorHandler.js";
import { syncSequlizeBasedOnEnvironment } from "./app/models/RootModel.js";
import cookieParser from "cookie-parser";
import { initializePassport } from "./app/middleware/authMiddleware.js";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
initializePassport();

rootRoute(app);

app.use(errorHandler);

(async () => {
  try {
    await syncSequlizeBasedOnEnvironment();
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
})();
