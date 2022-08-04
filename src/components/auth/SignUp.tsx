import { useFormik } from "formik";
import { useState } from "react";
import { signUpValidationSchema } from "../../lib/yup";
import { Button, ButtonContainer } from "../style/common/Button";
import {
  Field,
  FieldError,
  FormTitle,
  FormErrorMessage,
  StyledInput,
  StyledLabel,
  FormSection,
} from "../style/common/Form";

interface ISignUpProps {}

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const enteredEmail = values.email;
      const enteredPassword = values.password;

      setSubmitting(false);
    },
  });

  return (
    <>
      <FormSection>
        <FormTitle>{isLogin ? "로그인" : "회원가입"}</FormTitle>
        <form onSubmit={formik.handleSubmit}>
          <Field>
            <StyledInput
              type="email"
              name="email"
              placeholder="이메일"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <StyledLabel htmlFor="emial">이메일</StyledLabel>
          </Field>
          {formik.touched.email && formik.errors.email ? (
            <FieldError>{formik.errors.email}</FieldError>
          ) : null}

          <Field>
            <Field>
              <StyledInput
                type="password"
                name="password"
                placeholder="비밀번호"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <StyledLabel htmlFor="password">비밀번호</StyledLabel>
            </Field>
          </Field>
          {formik.touched.password && formik.errors.password ? (
            <FieldError>{formik.errors.password}</FieldError>
          ) : null}

          <ButtonContainer>
            <Button type="submit">{isLogin ? "로그인" : "회원가입"}</Button>
            <Button type="button" onClick={switchAuthModeHandler}>
              {isLogin ? "계정 만들기" : "로그인하기"}
            </Button>
          </ButtonContainer>
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </form>
      </FormSection>
    </>
  );
};

export default SignUp;
