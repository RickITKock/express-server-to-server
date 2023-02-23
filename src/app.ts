import express, { Application } from "express";
import { todoRouter } from "./v1/routes/todoRoutes";

const app: Application = express();

app.use(express.json());

app.use(todoRouter);

export default app;
