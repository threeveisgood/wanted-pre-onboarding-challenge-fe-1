import client from "./client";
import { AuthResult } from "../types/auth";
import { User } from "../types/auth";

export async function register(params: User) {
  const res = await client.post<AuthResult>("/users/create", params);

  return res.data;
}

export async function login(params: User) {
  const res = await client.post<AuthResult>("/users/login", params);

  return res.data;
}
