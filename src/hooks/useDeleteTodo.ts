import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../api/deleteTodo";
import { useNavigate, useParams } from "react-router-dom";

export default function useDeleteTodo(id: string) {
  const queryClient = useQueryClient();
  let navigate = useNavigate();
  let { TodoId } = useParams();

  const mutation = useMutation(() => deleteTodo(id), {
    onSuccess: (data) => {
      console.log(data);

      if (TodoId === id) {
        navigate("/todos");
      }
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error) => {
      console.log(error);
      alert("에러가 발생하였습니다.: " + error);
    },
  });
  return mutation;
}
