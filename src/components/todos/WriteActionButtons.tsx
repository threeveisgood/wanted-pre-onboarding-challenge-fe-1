import * as React from "react";
import { WabButton, WabContainer } from "../style/todos/WriteActionsButtons";

interface IWriteActionButtonsProps {}

const WriteActionButtons: React.FunctionComponent<IWriteActionButtonsProps> = (
  props
) => {
  return (
    <>
      <WabContainer>
        <WabButton>추가</WabButton>
        <WabButton>지우기</WabButton>
      </WabContainer>
    </>
  );
};

export default WriteActionButtons;
