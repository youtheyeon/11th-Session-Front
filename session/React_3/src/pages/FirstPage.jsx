import React from "react";
import styled from "styled-components";

const FirstPage = () => {
  return (
    <PageWrapper>
      <Container></Container>
    </PageWrapper>
  );
};

export default FirstPage;

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;

const Container = styled.div`
  width: 35%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: solid 2px gray;
  border-radius: 10px;
  background-color: white;
`;
