import { AxiosError } from "axios";

export interface TodoData {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Todos {
  data: ReadonlyArray<TodoData>;
}

export interface Todo {
  data: TodoData;
}

type TodosErrorData = {
  message: {
    id: string;
    message: string;
  }[];
}[];

export type TodosError = AxiosError<{
  statusCode: number;
  error: string;
  message: TodosErrorData;
  data: TodosErrorData;
}>;
