//Mypage
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//images
import userIcon from "../images/userIcon.svg";
import menuIcon from "../images/menu.svg";
import background from "../images/title.svg";

const TopBar = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;
  //----------------------------------------------------
  // 문제 1) userID localStorage에서 받아오기

  // 문제 2) path값과 userID 값이 있는지에 따라서 navigate하기
  const navigator = () => {};
  //----------------------------------------------------
  return (
    <Wrapper>
      <img src={path == "/" ? userIcon : menuIcon} onClick={navigator}></img>
      <Title>
        {path == "/" ? "책 목록" : path == "/mypage" ? "마이페이지" : "로그인"}
      </Title>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-style: none none solid none;
  border-bottom: solid 1px #9b9b9b;

  img {
    width: 30px;
    position: absolute;
    margin-right: 300px;
  }
`;
const Title = styled.div`
  width: 160px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-weight: 600;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
`;
