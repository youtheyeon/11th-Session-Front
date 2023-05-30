import React from "react";
import styled from "styled-components";

const Content = ({ isDark }) => {
  const user = "정연주";
  return (
    <ContentWrapper isDark={isDark}>
      <div>{user}님, 좋은 하루 되세요!</div>
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div`
  background-color: ${(props) => (props.isDark ? "#404345" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
