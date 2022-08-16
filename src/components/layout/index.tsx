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
        <main>
          <Container>{children}</Container>
        </main>
      </MainContainer>
    </>
  );
};

export default Layout;
