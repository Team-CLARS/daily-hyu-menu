import React, { useState } from "react";
import { Nav, NavbarContainer, NavLogo, NavIcon, HamburgerIcon, NavMenu, NavItem, NavLinks, HamburgerIconStacked } from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const [homeClick, setHomeClick] = useState(false);
  const [DownloadsDownloadClick, setDownloadsDownloadClick] = useState(false);
  const [productsClick, setProductsClick] = useState(false);

  const handleHomeClick = () => {
    setHomeClick(true);
    setProductsClick(false);
    setDownloadsDownloadClick(false);
  };
  const handleDownloadsDownloadClick = () => {
    setHomeClick(false);
    setProductsClick(false);
    setDownloadsDownloadClick(true);
  };
  const handleProductsClick = () => {
    setHomeClick(false);
    setProductsClick(true);
    setDownloadsDownloadClick(false);
  };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              오늘의 식냥
            </NavLogo>
            <HamburgerIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</HamburgerIcon>
            <NavMenu onClick={handleClick} click={click}>
              <HamburgerIconStacked onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</HamburgerIconStacked>
              <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  홈
                </NavLinks>
              </NavItem>

              <NavItem onClick={handleDownloadsDownloadClick} DownloadsDownloadClick={DownloadsDownloadClick}>
                <NavLinks to="/download" onClick={closeMobileMenu}>
                  다운로드
                </NavLinks>
              </NavItem>

              <NavItem onClick={handleProductsClick} productsClick={productsClick}>
                <NavLinks to="/changelog" onClick={closeMobileMenu}>
                  공지사항
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
