import express from "express";
import next from "next";
import { env } from "./backend/app/config/env.js";
import { app as backendApp } from "./backend/main.js";

const dev = env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const app = express();

nextApp.prepare().then(() => {
  app.use("/api", backendApp);

  app.all("*", (req, res) => {
    return handle(req, res);
  });
  console.log(`🚀 Server running at http://localhost:${env.PORT || 4000}`);
});
