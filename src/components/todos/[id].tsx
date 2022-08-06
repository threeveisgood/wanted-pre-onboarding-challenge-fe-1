import * as React from "react";
import { useParams } from "react-router-dom";
import useTodo from "../../hooks/useTodo";

interface ITodoProps {}

const Todo: React.FunctionComponent<ITodoProps> = (props) => {
  let { id } = useParams();
  let todoID: string = String(id);

  const { isLoading, isError, data } = useTodo(todoID);

  if (!isLoading) {
    console.log(data);
  }

  if (isError) {
    console.log(isError);
  }

  return <></>;
};

export default Todo;
