import { z } from "zod";

const OnboardProceedFormValidation = z.object({
  userId: z
    .number({ message: "user ID is required" })
    .min(1, { message: "User ID must be a positive integer." }),
  roles: z
    .number({ message: "user ID is required" })
    .min(1, { message: "User ID must be a positive integer." }),

  storeName: z.string({ message: "Business name is required" }),
  storeType: z.string({ message: "Business type is required" }),
  storeAddress: z.string().optional(),
});

export { OnboardProceedFormValidation };
