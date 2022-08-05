import * as React from "react";
import AuthForm from "./AuthForm";

interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <>
      <AuthForm />
    </>
  );
};

export default Auth;
