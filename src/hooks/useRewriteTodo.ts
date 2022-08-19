import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { rewriteTodo } from "../api/rewriteTodo";
import { TodosError } from "../types/todos";
import useTodosStateActions from "./state/useTodosStateActions";

export default function useRewriteTodo(originalId?: string) {
  const queryClient = useQueryClient();
  const { reset } = useTodosStateActions();

  const mutation = useMutation(rewriteTodo, {
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries(["todos"]);
      queryClient.invalidateQueries(["todo", originalId ?? null]);
    },
    onError: (error: TodosError) => {
      toast.error("에러가 발생하였습니다.: " + error.message);
    },
  });
  return mutation;
}
