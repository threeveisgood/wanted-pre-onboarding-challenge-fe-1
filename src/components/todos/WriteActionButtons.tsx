import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useCreateTodo from "../../hooks/useCreateTodo";
import useRewriteTodo from "../../hooks/useRewriteTodo";
import { RootState } from "../../slices";
import { WabButton, WabContainer } from "../style/todos/WriteActionsButtons";
import { useDispatch } from "react-redux";
import { reset } from "../../slices/todos";

interface IWriteActionButtonsProps {}

const WriteActionButtons: React.FunctionComponent<IWriteActionButtonsProps> = (
  props
) => {
  const dispatch = useDispatch();
  const { title, content, originalId } = useSelector(
    ({ todos }: RootState) => ({
      title: todos.title,
      content: todos.content,
      originalId: todos.originalId,
    })
  );

  const [isOriginalId, setIsOriginalId] = useState<boolean>(false);

  const { mutate: createMutate } = useCreateTodo();
  const { mutate: rewriteMutate } = useRewriteTodo();

  const createTodo = () => {
    createMutate({ title, content });
  };

  const rewriteTodo = () => {
    rewriteMutate({ title, content, id: originalId });
  };

  const onReset = useCallback(() => dispatch(reset()), [dispatch]);

  useEffect(() => {
    if (originalId !== "") {
      setIsOriginalId(true);
    } else {
      setIsOriginalId(false);
    }
  }, [originalId]);

  return (
    <>
      <WabContainer>
        <WabButton onClick={isOriginalId ? rewriteTodo : createTodo}>
          {isOriginalId ? "수정" : "추가"}
        </WabButton>
        <WabButton onClick={onReset}>지우기</WabButton>
      </WabContainer>
    </>
  );
};

export default WriteActionButtons;
