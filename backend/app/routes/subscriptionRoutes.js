import express from "express";
import { subscriptionSchema } from "../validations/subscriptionSchema.js";
import { validate } from "../middleware/validateMiddleware.js";
import { subscriptionStatus } from "../controllers/subscriptionController.js";

const subscriptionRoutes = express.Router();

subscriptionRoutes.post(
  "/status",
  validate(subscriptionSchema),
  subscriptionStatus
);

export { subscriptionRoutes };
