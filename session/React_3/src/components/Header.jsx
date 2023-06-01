import React, {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../contexts/ThemeContext';
import {UserContext} from '../contexts/UserContext';

const Header = () => {
  const {isDark} = useContext(ThemeContext);
  const {user} = useContext(UserContext);

  // const user = '정연주';
  return (
    <HeaderWrapper isDark={isDark}>
      <Title>{user}의 블로그</Title>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  background-color: ${(props) => (props.isDark ? '#1E1E20' : 'lightgray')};
  color: ${(props) => (props.isDark ? 'white' : 'black')};

  width: 100%;
  height: 65px;
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
