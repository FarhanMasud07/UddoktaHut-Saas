import { z } from "zod";

const ShopFormValidation = z.object({
  category: z.string({ message: "Category type is required" }),
});

export { ShopFormValidation };
