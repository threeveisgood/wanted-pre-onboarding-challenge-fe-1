import { useState, useEffect } from "react";
import { QuillWrapper, WriteContainer, WriteTitle } from "../style/todos/Write";
import ReactQuill from "react-quill";
import { modules } from "../../lib/quill";
import "react-quill/dist/quill.snow.css";
import WriteActionButtons from "./WriteActionButtons";
import useTodosState from "../../hooks/state/useTodosState";
import useTodosStateActions from "../../hooks/state/useTodosStateActions";

interface IWriteProps {}

const Write: React.FunctionComponent<IWriteProps> = (props) => {
  const { title, content, originalId } = useTodosState();
  const { setTitle, setContent } = useTodosStateActions();
  const [isOriginalId, setIsOriginalId] = useState<boolean>(false);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleChangeContent = (payload: string) => setContent(payload);

  useEffect(() => {
    if (originalId !== "") {
      setIsOriginalId(true);
    } else {
      setIsOriginalId(false);
    }
  }, [originalId]);

  return (
    <>
      <WriteContainer>
        <WriteTitle
          onChange={handleChangeTitle}
          value={isOriginalId ? title : title}
        />
        <QuillWrapper>
          <ReactQuill
            theme="snow"
            placeholder="내용을 입력하세요"
            modules={modules}
            onChange={handleChangeContent}
            value={isOriginalId ? content : content}
          />
        </QuillWrapper>
        <WriteActionButtons />
      </WriteContainer>
    </>
  );
};

export default Write;
