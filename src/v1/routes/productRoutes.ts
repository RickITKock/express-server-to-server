import { NextFunction, Request, Response, Router } from "express";

const productRouter = Router();

productRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Handling GET requests to /products" });
});

productRouter
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;

    if (id === "special") {
      res.status(200).json({ message: "Hello World" });
    }
  })
  .put((req, res) => {
    const id = req.params.id;

    if (id === "special") {
      res.status(200).json({ message: "Hello World" });
    }
  })
  .delete((req, res) => {
    const id = req.params.id;

    if (id === "special") {
      res.status(200).json({ message: "Hello World" });
    }
  });

productRouter.get("/:productId");
productRouter.put("/:productId", (req, res) => {
  const id = req.params.productId;

  if (id === "special") {
    res.status(200).json({ message: "Hello World" });
  }
});
productRouter.delete("/:productId", (req, res) => {
  const id = req.params.productId;

  if (id === "special") {
    res.status(200).json({ message: "Hello World" });
  }
});

productRouter.post("/", logger, (req, res) => {
  const product = {
    id: "0",
    name: req.body.productName,
    price: req.body.price,
  };

  res.status(201).json({ message: "Handling POST requests to /products" });
});

productRouter.param("id", (req: Request, res: Response, next: NextFunction) => {
  // console.log("param:\t" + id);
  next();
});

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(req.originalUrl);
  next();
}

export { productRouter };
