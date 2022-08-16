import { Todo } from "../types/todos";
import client from "./client";

export async function todo(id: string | undefined) {
  return typeof id === "undefined"
    ? Promise.reject(new Error("Invalid id"))
    : client.get<Todo>(`/todos/${id}`).then((res) => res.data);
}
