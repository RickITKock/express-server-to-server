import { NextFunction, Request, Response, Router } from "express";
import { z } from "zod";

import { Product } from "../../models/Product";

const productRouter = Router();

type Product = z.infer<typeof Product>;

productRouter.get("/", (req, res) => {
  const products = Array<Product>();

  const newProduct: Product = {
    id: "1",
    name: "dummy",
  };
  products.push(newProduct);

  res.status(200).json({ data: products });
});

productRouter.get("/:productId", (req, res) => {
  const id = req.params.productId;

  if (id === "special") {
    res.status(200).json({ message: "Hello World" });
  }
});

export { productRouter };
