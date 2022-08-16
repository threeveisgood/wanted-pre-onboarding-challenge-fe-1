import { useFormik } from "formik";
import { useState } from "react";
import useLogin from "../../hooks/useLogIn";
import useRegister from "../../hooks/useRegister";
import { registerValidationSchema } from "../../lib/yup";
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

interface IAuthFormProps {}

const AuthForm: React.FunctionComponent<IAuthFormProps> = () => {
  const [errorMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const { mutate: login, isLoading: loginLoading } = useLogin();
  const { mutate: regiseter, isLoading: registerLoading } = useRegister();

  const isLoading = loginLoading || registerLoading;

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const enteredEmail: string = values.email;
      const enteredPassword: string = values.password;

      if (isLoading) {
        return;
      }

      if (isLogin) {
        login({
          email: enteredEmail,
          password: enteredPassword,
        });
      } else {
        regiseter({
          email: enteredEmail,
          password: enteredPassword,
        });
      }
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
            <StyledLabel htmlFor="email">이메일</StyledLabel>
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

export default AuthForm;
