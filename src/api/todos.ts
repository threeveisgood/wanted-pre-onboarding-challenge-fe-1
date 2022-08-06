import { Todo } from "../types/todos";
import client from "./client";

interface Todos {
  data: Todo[];
  isLoading: boolean;
}

export async function todos() {
  const { data } = await client.get<Todos>("/todos");
  return data;
}
