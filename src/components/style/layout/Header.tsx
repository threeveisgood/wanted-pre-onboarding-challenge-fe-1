import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  top: 0;
  z-index: 11;
  padding: 0 5rem;
  transition: ${({ theme }) => theme.transition.normal};
  pointer-events: auto;
  background: ${({ theme }) => theme.black};

  ${({ theme }) => theme.media.tabPort} {
    padding: 0 2.5rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 12;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.black};
`;

// 공용 리액트 라우터 링크 스타일
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.white};
`;

// 데스크탑 전용 헤더 링크

export const Links = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.tabPort} {
    display: none;
  }
`;

export const LinksOl = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const LinksLi = styled.li`
  margin: 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.sm};

  color: ${({ theme }) => theme.black};
`;

export const LinksA = styled(StyledLink)`
  padding: 1rem;
`;
