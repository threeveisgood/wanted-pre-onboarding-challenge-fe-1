import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { createTodo } from "../api/createTodo";
import { reset } from "../slices/todos";

export default function useCreateTodo() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation(createTodo, {
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
