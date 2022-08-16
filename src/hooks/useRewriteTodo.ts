import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rewriteTodo } from "../api/rewriteTodo";
import useTodosStateActions from "./state/useTodosStateActions";

export default function useRewriteTodo() {
  const queryClient = useQueryClient();
  const { reset } = useTodosStateActions();

  const mutation = useMutation(rewriteTodo, {
    onSuccess: (data) => {
      console.log(data);

      reset();
      queryClient.invalidateQueries(["todos"]);
      queryClient.invalidateQueries(["todo"]);
    },
    onError: (error) => {
      alert("에러가 발생하였습니다.: " + error);
      console.log(error);
    },
  });
  return mutation;
}
