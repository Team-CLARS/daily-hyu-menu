import React from "react";
import error from "../../images/404-error.png";
import { CenterWrapper } from "../../components/error/error.components";

const NotFound = () => {
  return (
    <>
      <CenterWrapper>
        <h1>이런 페이지 없는뎁쇼</h1>
        <img src={error} />
      </CenterWrapper>
    </>
  );
};

export default NotFound;
