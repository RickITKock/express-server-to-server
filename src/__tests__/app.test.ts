import request from "supertest";
import { string, z } from "zod";
import app from "../app";
import { Todo, Todos } from "../models/Todo";

type Todo = z.infer<typeof Todo>;
type Todos = z.infer<typeof Todos>;

describe("Todos API", () => {
  it("GET (200) /products --> Array of products", async () => {
    const response = await request(app).get(`/v1/products`);
    console.log(response.body);
    expect(response.status).toBe(200);
  });
});
