import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login } from "../api/auth";
import { applyToken } from "../api/client";
import { AuthError } from "../types/auth";

export default function useLogin() {
  const mutation = useMutation(login, {
    onSuccess: (data) => {
      applyToken(data.token);
      window.location.reload();
    },
    onError: (error: AuthError) => {
      toast.error("에러가 발생하였습니다.: " + error);
    },
  });
  return mutation;
}
