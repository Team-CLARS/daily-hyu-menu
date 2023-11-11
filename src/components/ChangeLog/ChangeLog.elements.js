import styled from "styled-components";

export const ChangeLogHeader = styled.h1`
  padding: 2rem 10%;
  background: linear-gradient(to bottom, var(--primary-background-color), #151528);
  color: white;
`;

export const ChangeLogFooter = styled.div`
  height: 4rem;
  background: linear-gradient(to top, var(--primary-background-color), #151528);
`;

export const Wrapper = styled.div`
  background-color: #151528;
  width: 100%;
  padding-bottom: 2.5rem;
`;
export const Container = styled.div`
  display: flex;
  background-color: #151528;
  color: #fff;
  padding: 16px 0;
  margin: 0 10%;
  flex-direction: row;
  justify-content: center;
  border-top: gray solid 1px;
  @media (max-width: 750px) {
    flex-direction: column;
    padding: 16px 15px;
  }
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: var(--header-height);
`;

export const DateContainer = styled.h2`
  font-family: "D2Coding";
  font-weight: 800;
  font-size: 1.3rem;
  line-height: 1.75rem;
`;

export const VersionContainer = styled.div`
  font-family: "D2Coding";
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: gray;
`;

export const StatusContainer = styled.div`
  margin: 0.3rem 0;
`;

export const StatusBadge = styled.span`
  font-size: 0.8rem;
  font-family: "D2Coding";
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.75rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;

  &.public {
    background-color: rgb(20, 83, 45);
    color: rgb(74, 222, 128);
  }
  &.private {
    background-color: rgb(76, 29, 149);
    color: rgb(196, 181, 253);
  }
`;

export const ImprovementsContainer = styled.div`
  word-break: break-word;
  flex-basis: 50%;
  margin-left: 2.5rem;
  @media (max-width: 750px) {
    flex-basis: initial;
    margin-left: 0;
  }
`;

export const ImprovementsList = styled.ul`
  list-style: none;

  @media (max-width: 750px) {
    margin-top: 1.5em;
    margin-left: 1.2em;
  }
`;

export const ImprovementItem = styled.li`
  &::before {
    content: "•";
    color: gray;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    margin-bottom: 0.2em;
  }
`;
