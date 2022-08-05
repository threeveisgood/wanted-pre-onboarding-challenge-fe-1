import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { AuthError } from "../types/auth";

export default function useLogin() {
  const mutation = useMutation(login, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });
  return mutation;
}
