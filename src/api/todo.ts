import { Todo } from "../types/todos";
import client from "./client";

export async function todo(id: string) {
  const { data } = await client.get<Todo>(`/todos/${id}`);
  return data;
}
