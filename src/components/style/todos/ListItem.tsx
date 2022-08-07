import styled from "styled-components";

export const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-radius: 0.8rem;
  margin-bottom: 0.8rem;

  &:nth-child(even) {
    background: ${({ theme }) => theme.green};
  }
  &:nth-child(odd) {
    background: ${({ theme }) => theme.beige};
  }
`;

export const ItemP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  //color: ${(props) => props.theme.black};
`;

export const ItemReWrite = styled.span`
  margin-right: 0.9rem;
  cursor: pointer;
`;

export const ItemDelete = styled.span`
  cursor: pointer;
`;
