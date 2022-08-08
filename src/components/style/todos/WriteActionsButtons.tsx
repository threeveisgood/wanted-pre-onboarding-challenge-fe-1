import styled from "styled-components";
import { Button } from "../common/Button";

export const WabContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  justify-content: center;
`;

export const WabButton = styled(Button)`
  font-size: 1.3rem;
  padding: 1rem 1.4rem;
  color: ${({ theme }) => theme.black};
  font-weight: bold;

  &:nth-child(even) {
    background: ${({ theme }) => theme.green};
  }
  &:nth-child(odd) {
    background: ${({ theme }) => theme.beige};
  }
`;
