import { combineReducers } from "redux";
import todos from "./todos";

const rootReducer = combineReducers({
  todos,
});

export type RootState = ReturnType<typeof rootReducer>;

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}

export default rootReducer;
