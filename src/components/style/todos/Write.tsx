import styled from "styled-components";

export const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
  padding: 4rem 5rem 5rem;

  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 1rem;
  background: ${({ theme }) => theme.linearGradient};

  margin-bottom: 5rem;
`;

export const WriteTitle = styled.input.attrs(() => ({
  placeholder: "제목",
}))`
  font-size: 2.3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.white};
  margin-bottom: 1rem;
  width: 100%;
  padding: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.white};

  ::placeholder {
    color: white;
    opacity: 1;
  }
`;

export const QuillWrapper = styled.div`
  margin-top: 3rem;
  background: ${({ theme }) => theme.green};

  .ql-editor {
    padding: 0;
    min-height: 220px;
    font-size: 1.5rem;
    line-height: 1.5;
    background: ${({ theme }) => theme.beige};
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;
