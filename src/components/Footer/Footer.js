import React from "react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { FooterContainer, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink } from "./Footer.elements";

function Footer() {
  const date = new Date();

  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>오늘의 식냥</FooterLinkTitle>
            <FooterLink to="/download">다운로드</FooterLink>
            <FooterLink to="/changelog">변경 로그</FooterLink>
            <FooterLink to="#">공지사항</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>이용약관</FooterLinkTitle>
            <FooterLink to="/terms-of-use/privacy-policy">개인정보 처리방침</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            오늘의 식냥
          </SocialLogo>
          <WebsiteRights>teamCLARS © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="https://play.google.com/store/apps/details?id=com.hyu.clars.daily_hyu_menu_frontend" target="_blank" aria-label="GooglePlay">
              <FaGooglePlay />
            </SocialIconLink>
            <SocialIconLink href="https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98%EC%9D%98-%EC%8B%9D%EB%83%A5/id6469571610" target="_blank" aria-label="AppStore">
              <FaAppStoreIos />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
