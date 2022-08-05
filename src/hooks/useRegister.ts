import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import { AuthError } from "../types/auth";

export default function useRegister() {
  const mutation = useMutation(register, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });
  return mutation;
}
