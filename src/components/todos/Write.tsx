import { useState, useEffect, useCallback } from "react";
import { QuillWrapper, WriteContainer, WriteTitle } from "../style/todos/Write";
import ReactQuill from "react-quill";
import { modules } from "../../lib/quill";
import "react-quill/dist/quill.snow.css";
import WriteActionButtons from "./WriteActionButtons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../slices";
import { setTitle, setContent } from "../../slices/todos";

interface IWriteProps {}

const Write: React.FunctionComponent<IWriteProps> = (props) => {
  const dispatch = useDispatch();
  const { title, content, originalId } = useSelector(
    ({ todos }: RootState) => ({
      title: todos.title,
      content: todos.content,
      originalId: todos.originalId,
    })
  );
  const [isOriginalId, setIsOriginalId] = useState<boolean>(false);

  const handleChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setTitle(e.target.value)),
    [dispatch]
  );

  const handleChangeContent = useCallback(
    (payload: any) => dispatch(setContent(payload)),
    [dispatch]
  );

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
