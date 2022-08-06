import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  title: string;
  content: string;
}

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
});

export default todosSlice.reducer;
