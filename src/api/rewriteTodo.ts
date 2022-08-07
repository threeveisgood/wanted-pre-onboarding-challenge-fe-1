import { TodoData } from "../types/todos";
import client from "./client";

export async function rewriteTodo(params: {
  title: string;
  content: string;
  id: string;
}) {
  const { title, content, id } = params;
  const res = await client.put<TodoData>(`/todos/${id}`, {
    title,
    content,
  });
  return res.data;
}
