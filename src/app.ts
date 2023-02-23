import express, { Application } from "express";
import { productRouter } from "./v1/routes/productRoutes";

const app: Application = express();

app.use(express.json());

app.use("/v1/products", productRouter);

export default app;
