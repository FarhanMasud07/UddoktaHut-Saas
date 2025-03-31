import { z } from "zod";

const userRolesSchema = z.object({
  userId: z
    .number({ message: "user ID is required" })
    .min(1, { message: "User ID must be a positive integer." }),
  roles: z
    .array(
      z
        .number()
        .int()
        .positive()
        .min(1, { message: "Role ID must be a positive integer." })
    )
    .nonempty({ message: "Atleast one role needed" }),
});

export { userRolesSchema };
