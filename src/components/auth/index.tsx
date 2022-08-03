import * as React from "react";
import SignUp from "./SignUp";

interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <>
      <div>
        <SignUp />
      </div>
    </>
  );
};

export default Auth;
