import * as React from "react";
import Layout from "../layout";
import AuthForm from "./AuthForm";

interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <>
      <Layout>
        <AuthForm />
      </Layout>
    </>
  );
};

export default Auth;
