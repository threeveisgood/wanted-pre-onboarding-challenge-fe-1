import * as yup from "yup";

export const signUpValidationSchema = yup.object({
  email: yup
    .string()
    .email("이메일 형식으로 입력해주세요.")
    .required("반드시 입력해야하는 항목입니다."),
  password: yup
    .string()
    .min(8, "최소 8글자 이상 입력해주세요.")
    .required("반드시 입력해야하는 항목입니다."),
});
