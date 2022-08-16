import { useQuery } from "@tanstack/react-query";
import { todo } from "../api/todo";

export default function useTodo(id: string | undefined) {
  return useQuery(["todo", id], () => todo(id));
}
