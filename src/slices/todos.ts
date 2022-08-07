import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
  title: string;
  content: string;
  originalId: string;
}

const initialState: Todo = {
  title: "",
  content: "",
  originalId: "",
};

const todosSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    reset: () => initialState,
    setTitle(state, action) {
      state.title = action.payload;
    },
    setContent(state, action) {
      state.content = action.payload;
    },
    setOriginalContent(state, action) {
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.originalId = action.payload.originalId;
    },
  },
});

export const { reset, setTitle, setContent, setOriginalContent } =
  todosSlice.actions;
export default todosSlice.reducer;
