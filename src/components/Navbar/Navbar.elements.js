import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export const Nav = styled.nav`
  background: var(--primary-background-color);
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 4.5rem;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  font-family: "Jal_Onuel";
  margin-top: 0.4rem;
`;

export const NavIcon = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  height: 2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.2rem;
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const HamburgerIconStacked = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 1.5rem;
  }
  z-index: 4;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 750px) {
    display: ${({ click }) => (click ? "flex" : "none")};
    flex-direction: column;
    align-items: end;
    width: 100vw;
    height: 100vh;
    padding-left: 60%;
    background-color: transparent;
    transition: right 0.5s ease;
    position: absolute;
    top: 0;
    right: ${({ click }) => (click ? 0 : "-100%")};
    z-index: 4;

    &::before {
        content: "";
        position: absolute;
        top:0;
        left:0;
        width: 200%;
        height: 100vh;
        backdrop-filter: blur(10px);
        z-index: 2;
    }

    &::after {
        content: "";
        position: absolute;
        top:0;
        right:0;
        width: 40%;
        height: 100vh;
        background-color:  var(--primary-background-color);
        z-index: 3;
    }

  }
`;
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  border-radius: 2px;
  z-index: 4;

  &:hover {
    filter: contrast(50%);
  }

  @media screen and (max-width: 750px) {
    width: 100%;

    &:hover {
      border-bottom: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 750px) {
    padding: 1.5rem;
    width: 100%;
    text-align: start;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
