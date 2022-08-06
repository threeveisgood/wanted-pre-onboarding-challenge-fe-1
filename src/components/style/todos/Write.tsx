import styled from "styled-components";

export const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
`;

export const WriteTitle = styled.input.attrs(() => ({
  placeholder: "제목",
}))`
  font-size: 2.3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  margin-bottom: 1rem;
  width: 100%;
`;

export const QuillWrapper = styled.div`
  margin-top: 3rem;
  .ql-editor {
    padding: 0;
    min-height: 250px;
    font-size: 1.125;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;
