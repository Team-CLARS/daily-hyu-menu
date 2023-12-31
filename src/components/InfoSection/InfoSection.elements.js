import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "var(--primary-background-color)")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 750px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 650px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
  word-break: keep-all;
`;

export const Subtitle = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 1.2;
  word-break: keep-all;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
  & p {
    margin: 5px 0;
  }
`;
