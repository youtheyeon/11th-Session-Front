import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <button onClick={() => navigate("./first")}>useReducer</button>
        <button onClick={() => navigate("./second")}>context API</button>
      </Container>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
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

  button {
    width: 200px;
    font-size: 24px;
    margin-bottom: 4px;
  }
`;
