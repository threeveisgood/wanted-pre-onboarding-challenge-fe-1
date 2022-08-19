import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createTodo } from "../api/createTodo";
import { TodosError } from "../types/todos";
import useTodosStateActions from "./state/useTodosStateActions";

export default function useCreateTodo() {
  const queryClient = useQueryClient();
  const { reset } = useTodosStateActions();

  const mutation = useMutation(createTodo, {
    onSuccess: () => {
      reset();
      return queryClient.invalidateQueries(["todos"]);
    },
    onError: (error: TodosError) => {
      toast.error("에러가 발생하였습니다.: " + error.message);
    },
  });
  return mutation;
}
