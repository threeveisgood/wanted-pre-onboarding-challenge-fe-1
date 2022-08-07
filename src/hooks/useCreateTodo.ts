import { useMutation } from "@tanstack/react-query";
import { createTodo } from "../api/createTodo";

export default function useCreateTodo() {
  const mutation = useMutation(createTodo, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return mutation;
}
