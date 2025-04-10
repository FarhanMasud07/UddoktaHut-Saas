import { env } from "./env.js";
import express from "express";
import next from "next";
import { app as backendApp } from "./backend/main.js";

const dev = env.NODE_ENV !== "production";
const nextApp = next({ dev, dir: "./frontend" });
const handle = nextApp.getRequestHandler();

const app = express();

// ✅ Block ETag for frontend pages to allow full Cloudflare caching
// ✅ Allow ETag on /api routes
app.use((req, res, next) => {
  if (!req.url.startsWith("/api")) {
    const originalSetHeader = res.setHeader;
    res.setHeader = function (name, value) {
      if (name.toLowerCase() === "etag") return;
      originalSetHeader.call(this, name, value);
    };
  }
  next();
});

const startServer = async () => {
  try {
    await nextApp.prepare();

    app.use("/api", backendApp);

    app.all("*", (req, res) => {
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
