import styled from "styled-components";

export const LoadingCt = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border: 0.5rem solid ${(props) => props.theme.black};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: flex;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
