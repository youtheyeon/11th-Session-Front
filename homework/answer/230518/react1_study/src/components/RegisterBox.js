import React from "react";
import styled from "styled-components";
// images
import google from "../../src/images/google.svg";
import naver from "../../src/images/naver.svg";
import kakao from "../../src/images/kakao.svg";

const RegisterBox = (props) => {
  const { inputs, setInputs, setModal } = props;
  const { id, pw, pw2 } = inputs;

  // state 변경 함수
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  // modal 여는 함수
  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      <Wrapper>
        <Title>
          <p>create account</p>
          <p>회원가입하기</p>
          <p>
            이미 계정이 있으신가요?<p> 로그인하기</p>
          </p>
        </Title>
        <InputWrapper>
          <div className="line" />
          <Input
            placeholder="아이디(4자 이상)"
            name="id"
            onChange={onChange}
            value={id}
          ></Input>
          <Input
            placeholder="비밀번호(4자 이상)"
            name="pw"
            onChange={onChange}
            value={pw}
          ></Input>
          <Input
            placeholder="비밀번호 확인"
            name="pw2"
            onChange={onChange}
            value={pw2}
          ></Input>
          <RegisterBtn onClick={openModal}>계정 만들기</RegisterBtn>
          <div className="line2Wrapper">
            <div className="line2" />
            <p>OR</p>
            <div className="line2" />
          </div>
        </InputWrapper>
        <SNSWrapper>
          <p>다음 계정으로 가입하기</p>
          <div>
            <img src={google} />
            <img src={naver} />
            <img src={kakao} />
          </div>
        </SNSWrapper>
      </Wrapper>
    </>
  );
};

export default RegisterBox;

const Wrapper = styled.div`
  width: 52%;
  aspect-ratio: 1.27 /1;
  min-width: 503px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;
const Title = styled.div`
  height: 17%;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  :nth-child(3) {
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 16px;
    :nth-child(1) {
      margin-left: 5px;
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
  }
  @media (max-width: 1100px) {
    :nth-child(2) {
      font-size: 25px;
    }
    :nth-child(3) {
      font-size: 12px;
      :nth-child(1) {
        font-size: 12px;
      }
    }
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    :nth-child(2) {
      font-size: 30px;
    }
    :nth-child(3) {
      font-size: 14px;
      :nth-child(1) {
        font-size: 14px;
      }
    }
  }
`;
const InputWrapper = styled.div`
  width: 63%;
  aspect-ratio: 1.82;

  display: flex;
  flex-direction: column;
  align-items: center;
  .line {
    width: 100%;
    border: 0.75px solid #d7d7d7;
    margin: 6.7% 0;
  }
  .line2Wrapper {
    width: 100%;
    margin: 6.7% 0 3% 0;
    display: flex;
    align-items: center;
  }
  .line2 {
    margin: 0;
    width: 45%;
    border: 0.75px solid #d7d7d7;
  }
  p {
    margin: 0;
    padding: 0 5%;
    font-size: 15px;
    font-weight: 300;
    color: #333333;
  }
`;
const Input = styled.input`
  width: 61%;
  aspect-ratio: 7.6/1;
  margin-bottom: 4%;
  padding-left: 10px;

  border: 0.8px solid #979797;
  box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
  border-radius: 10px;
  outline: none;
  font-size: 15px;
  @media (max-width: 1100px) {
    font-size: 10px;
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    font-size: 13px;
  }
`;
const RegisterBtn = styled.button`
  width: 63%;
  aspect-ratio: 7.6/1;
  color: #ffffff;
  background: #dcdcdc;
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
const SNSWrapper = styled.div`
  width: 26%;
  padding: 0 0 20px 0;
  p {
    margin: 0 0 10% 0;
    color: #333333;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 22.7%;
    filter: drop-shadow(0px 2px 18px rgba(0, 0, 0, 0.1));
  }
  font-size: 20px;
  @media (max-width: 1100px) {
    font-size: 14px;
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    font-size: 17px;
  }
`;
