import { useRef } from "react";
import { QuillWrapper, WriteContainer, WriteTitle } from "../style/todos/Write";
import ReactQuill from "react-quill";
import { modules } from "../../lib/quill";
import "react-quill/dist/quill.snow.css";
import WriteActionButtons from "./WriteActionButtons";

interface IWriteProps {}

const Write: React.FunctionComponent<IWriteProps> = (props) => {
  const quillRef = useRef<string>(null);

  return (
    <>
      <WriteContainer>
        <WriteTitle />
        <QuillWrapper>
          <ReactQuill
            theme="snow"
            placeholder="내용을 입력하세요"
            modules={modules}
            //forwardedRef={quillRef}
            //onChange={onChangeText}
            defaultValue={``}
          />
        </QuillWrapper>
        <WriteActionButtons />
      </WriteContainer>
    </>
  );
};

export default Write;
