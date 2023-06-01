import React, {useState} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import {ThemeContext} from '../contexts/ThemeContext';
import {UserContext} from '../contexts/UserContext';

const SecondPage = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={{user: '아기사자'}}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <PageWrapper>
          <Header />
          <Content />
          <Footer />
        </PageWrapper>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default SecondPage;

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
