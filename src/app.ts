import express, { Application } from "express";
import { z } from "zod";
import { logger } from "./logger";
import { Todo, Todos } from "./models/Todo";

type Todo = z.infer<typeof Todo>;
type Todos = z.infer<typeof Todos>;

const todos: Array<Todo> = [
  { id: "1", todo: "Todo list item 1" },
  { id: "2", todo: "Todo list item 2" },
];

const app: Application = express();

app.use(express.json());

app.get("/todos", (req, res) => {
  res.send(todos);
});

export default app;
