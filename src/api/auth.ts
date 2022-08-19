import client from "./client";
import { AuthResult } from "../types/auth";
import { User } from "../types/auth";

export async function register(params: User) {
  const { data } = await client.post<AuthResult>("/users/create", params);

  return data;
}

export async function login(params: User) {
  const { data } = await client.post<AuthResult>("/users/login", params);

  return data;
}
