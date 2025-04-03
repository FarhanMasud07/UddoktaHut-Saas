import { z } from "zod";

export const LoginFormValidation = z.object({
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email address"),
  password: z.string({ message: "Password is required" }),
});

// need to do future
///     /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/
