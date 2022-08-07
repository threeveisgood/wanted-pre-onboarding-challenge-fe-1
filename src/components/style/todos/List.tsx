import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.5rem 1.5rem;
  margin-bottom: 6rem;
  width: ${({ theme }) => theme.todosLength};
  border-radius: 1rem;
  background: ${({ theme }) => theme.linearGradient};
`;

export const ListHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  margin-bottom: 2.3rem;
  border-bottom: 1px solid #ccc;
  color: ${({ theme }) => theme.white};
`;

export const ListItemList = styled.ul`
  margin-bottom: 1.6rem;
`;
