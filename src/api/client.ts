import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080",
});

export function applyToken(token: string) {
  return localStorage.setItem("token", token);
}

export function clearToken() {
  return localStorage.removeItem("token");
}

export default client;
