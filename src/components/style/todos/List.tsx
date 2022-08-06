import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.5rem 1.5rem;
  margin-bottom: 6rem;
  border-radius: 2rem;
  width: ${({ theme }) => theme.todosLength};
`;

export const ListHeader = styled.header`
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ccc;
`;
