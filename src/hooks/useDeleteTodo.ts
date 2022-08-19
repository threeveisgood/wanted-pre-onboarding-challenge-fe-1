import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteTodo } from "../api/deleteTodo";
import { TodosError } from "../types/todos";

export default function useDeleteTodo(id: string) {
  const queryClient = useQueryClient();

  const mutation = useMutation(() => deleteTodo(id), {
    onSuccess: () => {
      return queryClient.invalidateQueries(["todos"]);
    },
    onError: (error: TodosError) => {
      toast.error("에러가 발생하였습니다.: " + error.message);
    },
  });
  return mutation;
}
