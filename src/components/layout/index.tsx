import * as React from "react";
import Header from "./Header";
import { Container, MainContainer } from "../style/layout";

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <MainContainer>
        <Header />
        <Container>{children}</Container>
      </MainContainer>
    </>
  );
};

export default Layout;
