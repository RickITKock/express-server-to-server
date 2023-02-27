import { NextFunction, Request, Response, Router } from "express";
import { z } from "zod";

const orderRouter = Router();

orderRouter.get("/", (req, res, next) => {
  res.status(200).json({ message: "Orders were fetched" });
});

orderRouter.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({ message: "Order was created", order: order });
});

orderRouter.get("/:orderId", (req, res, next) => {
  res
    .status(200)
    .json({ message: "Order details", orderId: req.params.orderId });
});

export { orderRouter };
