import { Todos } from "../types/todos";
import client from "./client";

export async function todos() {
  const res = await client.get<Todos>("/todos");
  return res.data;
}
