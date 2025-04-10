import { env } from "./env.js";
import express from "express";
import next from "next";
import { app as backendApp } from "./backend/main.js";

const dev = env.NODE_ENV !== "production";
const nextApp = next({ dev, dir: "./frontend" });
const handle = nextApp.getRequestHandler();

const app = express();

// ✅ Block ETag and Vary headers for frontend pages to allow full Cloudflare caching
// ✅ Allow ETag on /api routes
app.use((req, res, next) => {
  // Only strip ETag and Vary for non-API requests
  if (!req.url.startsWith("/api")) {
    const originalSetHeader = res.setHeader;
    res.setHeader = function (name, value) {
      if (name.toLowerCase() === "etag" || name.toLowerCase() === "vary")
        return; // Prevent setting ETag and Vary
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
      if (
        !req.url.startsWith("/api") &&
        !req.url.startsWith("/dashboard") &&
        !req.url.startsWith("/onboarding")
      ) {
        res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=86400");
      }
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
