import React, { useState } from "react";
import { styled } from "styled-components";
const AdModal = (props) => {
  const { closeModal } = props;
  return (
    <>
      <Container>
        <Background>
          <Block>
            <Contents />
            <ButtonWrapper>
              30분동안 보지 않기
              <Close onClick={closeModal}>닫기</Close>
            </ButtonWrapper>
          </Block>
        </Background>
      </Container>
    </>
  );
};

export default AdModal;

const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  width: 80%;
  max-width: 400px;
  aspect-ratio: 1/1.2;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 200;

  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.2);
  background-color: white;
`;

const Contents = styled.div`
  width: 90%;
  height: 80%;
  margin-top: 5%;
  background-color: #a4b7d3;
`;

const ButtonWrapper = styled.div`
  width: 90%;
  height: 10%;
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Close = styled.button`
  width: 96px;
  height: 30px;
  background-color: #809bc3;
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0);
  color: white;
  border-radius: 4px;
  border: none;
  font-size: 15px;
  font-weight: 600;
`;
