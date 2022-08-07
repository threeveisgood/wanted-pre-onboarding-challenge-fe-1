import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  title: string;
  content: string;
}

const initialState: Todo = {
  title: "",
  content: "",
};

const todosSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setContent(state, action) {
      state.content = action.payload;
    },
  },
});

export const { setTitle, setContent } = todosSlice.actions;
export default todosSlice.reducer;
