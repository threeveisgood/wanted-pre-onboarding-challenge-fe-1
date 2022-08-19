import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  reset,
  setTitle,
  setContent,
  setOriginalContent,
  setId,
} from "../../slices/todos";

export default function useTodosStateActions() {
  const dispatch = useDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        { reset, setTitle, setContent, setOriginalContent, setId },
        dispatch
      ),
    [dispatch]
  );
}
