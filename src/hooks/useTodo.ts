import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { TodosError } from "../types/todos";
import { todo } from "../api/todo";

export default function useTodo(id: string | undefined) {
  return useQuery(["todo", id], () => todo(id), {
    onError: (error: TodosError) => {
      toast.error("에러가 발생하였습니다.: " + error.message);
    },
  });
}
