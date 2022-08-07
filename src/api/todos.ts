import { TodoData } from "../types/todos";
import client from "./client";

interface Todos {
  data: TodoData[];
  isLoading: boolean;
}

export async function todos() {
  const { data } = await client.get<Todos>("/todos");
  return data;
}
