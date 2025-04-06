import { z } from "zod";

export const LoginFormValidation = z
  .object({
    method: z.enum(["email", "phone"]),
    email: z
      .string({ message: "Email is required" })
      .email("Invalid email address")
      .optional(),
    phoneNumber: z
      .string({ message: "Phone number is required" })
      .regex(/^\+8801[3-9][0-9]{8}$/, "Invalid Bangladeshi phone number")
      .length(14, "Phone number must be exactly 13 characters")
      .optional(),
    password: z.string({ message: "Password is required" }).min(6, {
      message: "Password Invalid!",
    }),
  })
  .refine(
    (data) => {
      if (data.method === "email" && !data.email) {
        return false;
      }
      if (data.method === "phone" && !data.phoneNumber) {
        return false;
      }
      return true;
    },
    {
      message: "Either email or phone number is required",
      path: ["email", "phoneNumber"], // Error will show under email
    }
  );

// need to do future for password
///     /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/
