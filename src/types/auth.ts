import { AxiosError } from "axios";

export interface User {
  email: string;
  password: string;
}

export interface AuthResult {
  message: string;
  token: string;
}

type AuthErrorData = {
  message: {
    id: string;
    message: string;
  }[];
}[];

export type AuthError = AxiosError<{
  statusCode: number;
  error: string;
  message: AuthErrorData;
  data: AuthErrorData;
}>;
