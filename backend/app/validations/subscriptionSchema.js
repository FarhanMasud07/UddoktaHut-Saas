import { z } from "zod";

const subscriptionSchema = z.object({
  userId: z
    .number({ message: "user ID is required" })
    .min(1, { message: "User ID must be a positive integer." }),
});

export { subscriptionSchema };
