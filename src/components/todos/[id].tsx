import * as React from "react";
import { useParams } from "react-router-dom";
import useTodo from "../../hooks/useTodo";
import datejs from "../../lib/dayjs";
import LoadingSpinner from "../LoadingSpinner";
import {
  TodoContainer,
  TodoContent,
  TodoDate,
  TodoHeader,
  TodoTitle,
} from "../style/todos/todo";

interface ITodoProps {}

const Todo: React.FunctionComponent<ITodoProps> = (props) => {
  let { id } = useParams();
  let todoID: string = String(id);

  const { isLoading, data: todoData } = useTodo(todoID);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <TodoContainer>
      <TodoHeader>
        <TodoTitle>
          <h2>{todoData?.data.title}</h2>
        </TodoTitle>
        <TodoDate>{datejs(String(todoData?.data.updatedAt))}</TodoDate>
      </TodoHeader>
      <TodoContent
        dangerouslySetInnerHTML={{ __html: String(todoData?.data.content) }}
      />
    </TodoContainer>
  );
};

export default Todo;
