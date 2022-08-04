import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.5rem;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.black};
  color: #fff;

  padding: 1.1rem 1.6rem;
  border-width: 0.1rem;
  border-radius: 0.2rem;
  font-size: 1.4rem;

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;
