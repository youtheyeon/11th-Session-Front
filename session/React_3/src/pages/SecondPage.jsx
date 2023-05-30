import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const SecondPage = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <PageWrapper>
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </PageWrapper>
  );
};

export default SecondPage;

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
