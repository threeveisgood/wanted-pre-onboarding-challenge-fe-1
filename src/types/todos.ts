export interface TodoData {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Todos {
  data: TodoData[];
}

export interface Todo {
  data: TodoData;
}
