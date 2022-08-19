import client from "./client";

export async function deleteTodo(id: string) {
  await client.delete<null>(`/todos/${id}`);

  return null;
}
