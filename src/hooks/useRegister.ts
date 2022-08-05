import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import { AuthError } from "../types/auth";
import { useNavigate } from "react-router-dom";
import { applyToken } from "../api/client";

export default function useRegister() {
  let navigate = useNavigate();

  const mutation = useMutation(register, {
    onSuccess: (data) => {
      console.log(data);

      navigate("/");
      applyToken(data.token);
      window.location.reload();
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });
  return mutation;
}
