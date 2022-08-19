import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
  title: string;
  content: string;
  id: string;
  originalId: string;
}

const initialState: Todo = {
  title: "",
  content: "",
  id: "",
  originalId: "",
};

const todosSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    reset: () => initialState,
    setTitle(state, { payload }) {
      state.title = payload;
    },
    setContent(state, { payload }) {
      state.content = payload;
    },
    setId(state, { payload }) {
      state.id = payload;
    },
    setOriginalContent(state, { payload }) {
      state.title = payload.title;
      state.content = payload.content;
      state.originalId = payload.originalId;
    },
  },
});

export const { reset, setTitle, setContent, setOriginalContent, setId } =
  todosSlice.actions;
export default todosSlice.reducer;
