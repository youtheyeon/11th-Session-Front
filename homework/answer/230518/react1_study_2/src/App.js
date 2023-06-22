import React, { useState } from "react";
import styled from "styled-components";
// components
import Modal from "./components/Modal";
// images
import pm from "./images/pm.svg";
import front from "./images/front.svg";
import back from "./images/back.svg";

function App() {
  // modal 관리 useState
  const [modal, setModal] = useState(false);
  // 이름 input 관리 useState
  const [name, setName] = useState("");
  // 트랙 버튼 선택 관리 useState
  const [track, setTrack] = useState("");

  // modal 여는 함수
  const openModal = () => {
    setModal(true);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeTrack = (e) => {
    const { name } = e.target;
    setTrack(e.target.name);
  };
  return (
    <>
      <Wrapper>
        {modal ? <Modal setModal={setModal} name={name} track={track} /> : null}
        <Container>
          <Title>
            <p>create nameModal</p>
            <p>이름 모달 만들기</p>
          </Title>
          <InputWrapper>
            <div className="line" />
            <SubTitle>아기사자의 이름을 입력해주세요.</SubTitle>
            <Input placeholder="아기사자" onChange={changeName} value={name} />
          </InputWrapper>
          <ButtonWrapper>
            <SubTitle>트랙을 선택해주세요.</SubTitle>
            <IconWrapper>
              <Icons>
                <img src={pm} onClick={changeTrack} name="기획디자인" />
                <p>기획디자인</p>
              </Icons>
              <Icons>
                <img src={front} onClick={changeTrack} name="프론트엔드" />
                <p>프론트엔드</p>
              </Icons>
              <Icons>
                <img src={back} onClick={changeTrack} name="백엔드" />
                <p>백엔드</p>
              </Icons>
            </IconWrapper>
          </ButtonWrapper>
          <OpenModalBtn onClick={openModal}>이름 모달 만들기</OpenModalBtn>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d8e4ec;
  font-family: "Noto Sans";
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 52%;
  aspect-ratio: 1.27 /1;
  min-width: 503px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;

const Title = styled.div`
  height: 13%;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  p {
    margin: 0;
    color: #333333;
  }
  :nth-child(1) {
    font-weight: 300;
    font-size: 15px;
  }
  :nth-child(2) {
    font-weight: 600;
    font-size: 35px;
  }
  @media (max-width: 1100px) {
    :nth-child(2) {
      font-size: 25px;
    }
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    :nth-child(2) {
      font-size: 30px;
    }
  }
`;
const InputWrapper = styled.div`
  width: 63%;
  aspect-ratio: 3.98/1;
  margin-bottom: 7%;

  display: flex;
  flex-direction: column;
  .line {
    width: 100%;
    border: 0.75px solid #d7d7d7;
    margin: 6.7% 0;
  }
`;
const SubTitle = styled.p`
  text-align: left;
  margin: 0;
  font-weight: 400;
  font-size: 22px;
  color: #333333;

  @media (max-width: 1100px) {
    font-size: 16px;
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    font-size: 19px;
  }
`;
const Input = styled.input`
  width: 96%;
  aspect-ratio: 10.1/1;
  margin-top: 4%;
  padding-left: 4%;

  border: 0.8px solid #979797;
  box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
  border-radius: 10px;
  outline: none;
  font-size: 18px;
  letter-spacing: 0.1em;
  @media (max-width: 1100px) {
    font-size: 12px;
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    font-size: 15px;
  }
`;
const ButtonWrapper = styled.div`
  width: 63%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const IconWrapper = styled.div`
  width: 100%;
  margin: 5% 0 3% 0;
  display: flex;
  justify-content: space-evenly;
`;
const Icons = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  p {
    color: #414141;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
  }
  @media (max-width: 1100px) {
    p {
      font-size: 9px;
    }
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    p {
      font-size: 12px;
    }
  }
`;
const OpenModalBtn = styled.button`
  width: 63%;
  aspect-ratio: 9.6/1;
  color: #ffffff;
  background: #81a7d3;
  border-radius: 24.5px;
  border: none;
  font-size: 20px;
  @media (max-width: 1100px) {
    font-size: 12px;
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    font-size: 16px;
  }
`;
