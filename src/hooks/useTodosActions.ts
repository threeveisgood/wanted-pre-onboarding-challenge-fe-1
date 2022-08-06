import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export default function useTodosActions() {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators({}, dispatch), [dispatch]);
}
