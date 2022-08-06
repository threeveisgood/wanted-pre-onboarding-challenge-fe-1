import { useQuery } from "@tanstack/react-query";
import { todos } from "../api/todos";

export default function useTodos() {
  return useQuery(["todos"], todos);
}
