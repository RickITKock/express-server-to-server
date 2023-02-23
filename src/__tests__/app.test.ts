import request from "supertest";
import { string, z } from "zod";
import app from "../app";
import { Todo, Todos } from "../models/Todo";

type Todo = z.infer<typeof Todo>;
type Todos = z.infer<typeof Todos>;

describe("Todos API", () => {
  it("GET (200) /todos --> Array of todos", async () => {
    const response = await request(app).get(`/todos`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(Array<Todo>()));
  });
});
