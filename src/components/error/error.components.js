import styled from "styled-components";

export const CenterWrapper = styled.div`
  margin: 5rem 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  & h1 {
    font-family: "D2Coding";
  }

  & img {
    filter: brightness(0) invert(1);
    width: 15rem;
    margin: 0 auto;
  }
`;
