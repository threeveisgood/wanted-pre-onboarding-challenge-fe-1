import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../api/deleteTodo";
import { useNavigate } from "react-router-dom";

export default function useDeleteTodo(id: string) {
  const queryClient = useQueryClient();
  let navigate = useNavigate();

  const mutation = useMutation(() => deleteTodo(id), {
    onSuccess: (data) => {
      console.log(data);

      navigate("/todos");
      queryClient.invalidateQueries(["todos"]);
      queryClient.invalidateQueries(["todo"]);
    },
    onError: (error) => {
      console.log(error);
      alert("에러가 발생하였습니다.: " + error);
    },
  });
  return mutation;
}
