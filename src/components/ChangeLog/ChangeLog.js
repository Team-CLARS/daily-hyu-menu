import React from "react";
import { Wrapper, Container, HeaderContainer, DateContainer, VersionContainer, StatusContainer, StatusBadge, ImprovementsContainer, ImprovementsList, ImprovementItem } from "./ChangeLog.elements";

const ChangelogEntryElements = ({ date, version, isPublic, improvements }) => (
    <Wrapper>
  <Container>
    <HeaderContainer>
      <DateContainer href={`/changelog/${date}`}>{date}</DateContainer>
      <VersionContainer>{version}</VersionContainer>
      <StatusContainer>
        <StatusBadge className={isPublic ? "public" : "private"}>{isPublic ? "public" : "catalyst"}</StatusBadge>
      </StatusContainer>
    </HeaderContainer>
    <ImprovementsContainer>
      <ImprovementsList>
        {improvements.map((improvement, index) => (
          <ImprovementItem key={index}>{improvement}</ImprovementItem>
        ))}
      </ImprovementsList>
    </ImprovementsContainer>
  </Container></Wrapper>
);

export default ChangelogEntryElements;
