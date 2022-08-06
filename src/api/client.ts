import axios from "axios";
import { token } from "../lib/token";

const client = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: token,
  },
});

export function applyToken(token: string) {
  return localStorage.setItem("token", token);
}

export function clearToken() {
  return localStorage.removeItem("token");
}

export default client;
