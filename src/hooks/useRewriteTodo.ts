import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { rewriteTodo } from "../api/rewriteTodo";
import { reset } from "../slices/todos";

export default function useRewriteTodo() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation(rewriteTodo, {
    onSuccess: (data) => {
      console.log(data);

      dispatch(reset());
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return mutation;
}
