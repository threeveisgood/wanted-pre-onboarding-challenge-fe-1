import { useQuery } from "@tanstack/react-query";
import { todos } from "../api/todos";

import toast from "react-hot-toast";
import { TodosError } from "../types/todos";

export default function useTodos() {
  return useQuery(["todos"], todos, {
    onError: (error: TodosError) => {
      toast.error("에러가 발생하였습니다.: " + error.message);
    },
  });
}
