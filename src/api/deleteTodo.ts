import client from "./client";

export async function deleteTodo(id: string) {
  return client.delete<null>(`/todos/${id}`);
}
