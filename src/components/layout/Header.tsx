import * as React from "react";
import {
  HeaderContainer,
  Links,
  LinksA,
  LinksOl,
  LinksLi,
  Logo,
  Nav,
  StyledLink,
} from "../style/layout/Header";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <HeaderContainer>
        <Nav>
          <Logo>
            <StyledLink to="/">TODO</StyledLink>
          </Logo>
          <Links>
            <LinksOl>
              <LinksLi>
                <LinksA to="/auth">로그인</LinksA>
              </LinksLi>
              <LinksLi>
                <LinksA to="/auth">회원가입</LinksA>
              </LinksLi>
            </LinksOl>
          </Links>
        </Nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
