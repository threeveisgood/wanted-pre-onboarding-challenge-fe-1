import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../../api/client";
import { token } from "../../lib/token";
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
  let navigate = useNavigate();
  const [isLogin] = useState<boolean | null>(!!token);

  const onLogout = () => {
    clearToken();
    return window.location.reload();
  };

  useEffect(() => {
    if (!isLogin) {
      alert("로그인 해주시기 바랍니다!");
      navigate("/auth");
    }
  }, []);

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
                {isLogin ? (
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
