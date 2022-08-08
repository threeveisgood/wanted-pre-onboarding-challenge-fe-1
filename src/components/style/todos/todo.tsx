import styled from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  padding: 2rem 4rem;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: ${({ theme }) => theme.todosLength};
  margin-bottom: 4rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.linearGradient};
`;
export const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  color: ${({ theme }) => theme.white};
`;

export const TodoTitle = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
`;

export const TodoDate = styled.div`
  display: flex;
  padding: 2rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  align-items: center;
`;

export const TodoContent = styled.div`
  display: flex;
  padding: 3rem 3rem;

  margin: 3rem 0;
  background-color: ${({ theme }) => theme.beige};
  border-radius: 1rem;
`;
