import { useCallback } from "react";
import { QuillWrapper, WriteContainer, WriteTitle } from "../style/todos/Write";
import ReactQuill from "react-quill";
import { modules } from "../../lib/quill";
import "react-quill/dist/quill.snow.css";
import WriteActionButtons from "./WriteActionButtons";
import { useDispatch } from "react-redux";
import { setTitle, setContent } from "../../slices/todos";

interface IWriteProps {}

const Write: React.FunctionComponent<IWriteProps> = (props) => {
  const dispatch = useDispatch();

  const handleChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setTitle(e.target.value)),
    [dispatch]
  );

  const handleChangeContent = useCallback(
    (payload: any) => dispatch(setContent(payload)),
    [dispatch]
  );

  return (
    <>
      <WriteContainer>
        <WriteTitle onChange={handleChangeTitle} />
        <QuillWrapper>
          <ReactQuill
            theme="snow"
            placeholder="내용을 입력하세요"
            modules={modules}
            onChange={handleChangeContent}
            defaultValue={``}
          />
        </QuillWrapper>
        <WriteActionButtons />
      </WriteContainer>
    </>
  );
};

export default Write;
