import styled, { css } from "styled-components";

export const FormTitle = styled.h1`
  padding-bottom: 1.7rem;
`;

export const Field = styled.div`
  position: relative;
  padding: 1.5rem 0 0;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const FieldError = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.gray};
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${(props) => props.theme.black};
  font-weight: bold;
`;

export const FieldContainer = styled.div`
  margin-top: 3rem;
`;

export const InputStyle = css`
  width: 30rem;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.black};
  border-image-slice: 1;
  outline: 0;
  font-size: 1.5rem;
  padding: 0.7rem 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${StyledLabel} {
    font-size: 1.3rem;
    cursor: text;
    top: 2rem;
  }

  &:focus {
    ~ ${StyledLabel} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${(props) => props.theme.black};
    }
    padding-bottom: 6px;
    font-weight: 500;
    border-width: 2px;
    border-image-slice: 1;
  }
`;

export const StyledInput = styled.input`
  ${InputStyle}
`;

export const FormErrorMessage = styled.div`
  padding-top: 0.5rem;
  font-size: 1.3rem;
  color: ${(props) => props.theme.black};
`;
