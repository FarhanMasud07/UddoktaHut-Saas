import { authRoutes } from "./authRoutes.js";
import { storeRoutes } from "./storeRoutes.js";
import { userRoutes } from "./userRoutes.js";

const rootRoute = (app) => {
  app.use("/auth", authRoutes);
  app.use("/user", userRoutes);
  app.use("/store", storeRoutes);
};

export { rootRoute };
