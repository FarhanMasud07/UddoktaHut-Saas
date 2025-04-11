import { env } from "./env.js";
import express from "express";
import next from "next";
import { app as backendApp } from "./backend/main.js";

const dev = env.NODE_ENV !== "production";
const nextApp = next({ dev, dir: "./frontend" });
const handle = nextApp.getRequestHandler();

const app = express();

// ✅ No longer needed: remove header stripping middleware
// app.use(...) — gone

const startServer = async () => {
  try {
    await nextApp.prepare();

    // ✅ Mount backend API routes
    app.use("/api", backendApp);

    // ✅ Serve everything else through Next.js
    app.all("*", (req, res) => {
      // ❌ Remove all header manipulation here
      // ❌ Don't strip Set-Cookie or Vary — handled by Next.js middleware now
      // ❌ Don't set Cache-Control manually here

      return handle(req, res);
    });

    const PORT = env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to prepare Next.js app:", err);
    process.exit(1);
  }
};

startServer();
