import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import { AuthError } from "../types/auth";
import { useNavigate } from "react-router-dom";
import { applyToken } from "../api/client";
import toast from "react-hot-toast";

export default function useRegister() {
  let navigate = useNavigate();

  const mutation = useMutation(register, {
    onSuccess: (data) => {
      navigate("/");
      applyToken(data.token);
      window.location.reload();
    },
    onError: (error: AuthError) => {
      toast.error("에러가 발생하였습니다.: " + error.message);
    },
  });
  return mutation;
}
