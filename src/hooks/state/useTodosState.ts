import { useSelector } from "react-redux";
import { RootState } from "../../slices";

export default function useTodosState() {
  return useSelector((state: RootState) => state.todos);
}
