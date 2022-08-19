import { useEffect, useState } from "react";
import useCreateTodo from "../../hooks/useCreateTodo";
import useRewriteTodo from "../../hooks/useRewriteTodo";
import { WabButton, WabContainer } from "../style/todos/WriteActionsButtons";
import useTodosState from "../../hooks/state/useTodosState";
import useTodosStateActions from "../../hooks/state/useTodosStateActions";
import { useNavigate } from "react-router-dom";

interface IWriteActionButtonsProps {}

const WriteActionButtons: React.FunctionComponent<
  IWriteActionButtonsProps
> = () => {
  let navigate = useNavigate();
  const { title, content, originalId } = useTodosState();
  const { reset } = useTodosStateActions();
  const [isOriginalId, setIsOriginalId] = useState<boolean>(false);

  const { mutate: createMutate } = useCreateTodo();
  const { mutate: rewriteMutate } = useRewriteTodo(originalId ?? null);

  const createTodo = () => {
    createMutate({ title, content });
  };

  const rewriteTodo = () => {
    rewriteMutate(
      { title, content, id: originalId },
      {
        onSuccess: () => navigate(`/todos/${originalId}`),
      }
    );
  };

  const onReset = () => {
    reset();
  };

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
