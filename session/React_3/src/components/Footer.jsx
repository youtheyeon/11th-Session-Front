import React, {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../contexts/ThemeContext';

const Footer = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <FooterWrapper isDark={isDark}>
      <Button onClick={toggleTheme}>다크 모드</Button>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  background-color: ${(props) => (props.isDark ? 'black' : 'lightgray')};

  width: 100%;
  height: 65px;
  border-top: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px;
  margin-left: 12px;
`;
