import styled from "styled-components";

export const CounterContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #b2a75b, #aeafdf99, #6775b199, #23d5ab99);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const CounterSubtitle = styled.p`
  font-size: 1.4rem;
  margin: 0;
  color: #333;
`;

export const CounterNumber = styled.p`
  font-size: 4.3rem;
  font-weight: 700;
  color: black;
`;

export const CounterText = styled.p`
  font-size: 1.1rem;
  margin: 0;
  color: #333;
`;
