import { useAuth } from "../../hooks/state/useAuth";
import {
  HeaderContainer,
  Links,
  LinksA,
  LinksOl,
  LinksLi,
  Logo,
  Nav,
  StyledLink,
  LinksLogout,
} from "../style/layout/Header";

const Header: React.FunctionComponent = () => {
  let { isAuth, onLogout } = useAuth();

  return (
    <>
      <HeaderContainer>
        <Nav>
          <Logo>
            <StyledLink to="/todos">TODO</StyledLink>
          </Logo>
          <Links>
            <LinksOl>
              <LinksLi>
                {isAuth ? (
                  <LinksLogout onClick={onLogout}>로그아웃</LinksLogout>
                ) : (
                  <LinksA to="/auth">로그인</LinksA>
                )}
              </LinksLi>
            </LinksOl>
          </Links>
        </Nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
