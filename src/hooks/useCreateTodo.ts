import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../api/createTodo";
import useTodosStateActions from "./state/useTodosStateActions";

export default function useCreateTodo() {
  const queryClient = useQueryClient();
  const { reset } = useTodosStateActions();

  const mutation = useMutation(createTodo, {
    onSuccess: (data) => {
      console.log(data);

      reset();
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error) => {
      console.log(error);
      alert("에러가 발생하였습니다.: " + error);
    },
  });
  return mutation;
}
