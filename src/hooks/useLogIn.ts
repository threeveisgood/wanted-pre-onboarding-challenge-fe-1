import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { applyToken } from "../api/client";
import { AuthError } from "../types/auth";

export default function useLogin() {
  let navigate = useNavigate();

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      console.log(data);

      navigate("/");
      applyToken(data.token);
      window.location.reload();
    },
    onError: (error: AuthError) => {
      console.log(error);
      console.log(error.response?.data);
    },
  });
  return mutation;
}
