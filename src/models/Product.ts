import { z } from "zod";

export const Product = z.object({
  id: z.string(),
  name: z.string(),
});

export const Products = z.array(Product);
