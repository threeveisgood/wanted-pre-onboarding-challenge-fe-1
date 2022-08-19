import { Todos } from "../types/todos";
import client from "./client";

export async function todos() {
  const response = await client.get<Todos>("/todos");
  return response.data;
}
