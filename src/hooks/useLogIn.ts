import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { applyToken } from "../api/client";
import { AuthError } from "../types/auth";

export default function useLogin() {
  let navigate = useNavigate();

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      navigate("/todos");
      applyToken(data.token);
      window.location.reload();
    },
    onError: (error: AuthError) => {
      toast.error("에러가 발생하였습니다.: " + error);
    },
  });
  return mutation;
}
