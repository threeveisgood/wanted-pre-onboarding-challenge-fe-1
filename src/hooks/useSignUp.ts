import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import User from "../types/user";

const signUp = async (user: User) => {
  return axios.post("localhost:8080/users/create", user, {
    withCredentials: true,
  });
};

export const useSignUp = () => {
  return useMutation(signUp);
};
