import { useQuery } from "@tanstack/react-query";
import { todo } from "../api/todo";

export default function useTodo(id: string) {
  return useQuery(["todo", id], () => todo(id));
}
