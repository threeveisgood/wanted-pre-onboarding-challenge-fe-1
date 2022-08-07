import { TodoData } from "../types/todos";
import client from "./client";

interface Todo {
  data: TodoData;
  isLoading: boolean;
}

export async function todo(id: string) {
  const { data } = await client.get<Todo>(`/todos/${id}`);
  return data;
}
