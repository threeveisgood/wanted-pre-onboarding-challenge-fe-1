import * as React from "react";
import { useSelector } from "react-redux";
import useCreateTodo from "../../hooks/useCreateTodo";
import { RootState } from "../../slices";
import { WabButton, WabContainer } from "../style/todos/WriteActionsButtons";

interface IWriteActionButtonsProps {}

const WriteActionButtons: React.FunctionComponent<IWriteActionButtonsProps> = (
  props
) => {
  const { title, content } = useSelector(({ todos }: RootState) => ({
    title: todos.title,
    content: todos.content,
  }));

  const { mutate } = useCreateTodo();

  const createTodo = () => {
    mutate({ title, content });
  };

  return (
    <>
      <WabContainer>
        <WabButton onClick={createTodo}>추가</WabButton>
        <WabButton>지우기</WabButton>
      </WabContainer>
    </>
  );
};

export default WriteActionButtons;
