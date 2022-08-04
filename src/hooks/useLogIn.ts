import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import User from "../types/user";

const login = async (user: User) => {
  return axios
    .post("localhost:8080/users/login", user, {
      withCredentials: true,
    })
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("token", token);
    });
};

export const useLogin = () => {
  return useMutation(login);
};
