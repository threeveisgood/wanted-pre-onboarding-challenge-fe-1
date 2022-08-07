import { TodoData } from "../types/todos";
import client from "./client";

export async function createTodo(params: { title: string; content: string }) {
  const res = await client.post<TodoData>("/todos", params);

  return res.data;
}
