import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../api/deleteTodo";

export default function useDeleteTodo(id: string) {
  const queryClient = useQueryClient();
  const mutation = useMutation(() => deleteTodo(id), {
    onSuccess: (data) => {
      console.log(data);

      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return mutation;
}
