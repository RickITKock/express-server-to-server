import { NextFunction, Request, Response, Router } from "express";
import { z } from "zod";
import { Todo, Todos } from "../../models/Todo";

const todoRouter = Router();

type Todo = z.infer<typeof Todo>;
type Todos = z.infer<typeof Todos>;

const todos: Todos = [
  { id: "1", todo: "Todo list item 1" },
  { id: "2", todo: "Todo list item 2" },
];

todoRouter.get("/todos", (req, res) => {
  res.send(todos);
});

export { todoRouter };
