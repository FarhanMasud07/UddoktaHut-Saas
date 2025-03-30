import { env } from "./env.js";
import express from "express";
import next from "next";
import { app as backendApp } from "./backend/main.js";

const dev = env.NODE_ENV !== "production";
const nextApp = next({ dev, dir: "./frontend" });
const handle = nextApp.getRequestHandler();

const app = express();

nextApp.prepare().then(() => {
  app.use("/api", backendApp);

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
