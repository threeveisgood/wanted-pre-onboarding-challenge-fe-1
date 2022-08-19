import { TodoData } from "../types/todos";
import client from "./client";

export async function createTodo(params: { title: string; content: string }) {
  const response = await client.post<TodoData>("/todos", params);
  return response.data;
}
