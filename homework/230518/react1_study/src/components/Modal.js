import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const Modal = (props) => {
  const {setModal, input, text} = props;

  const deleteModal = () => {
    setModal(false);
  };

  return (
    <>
      <ModalBackground>
        <GlobalStyle />
        <Wrapper>
          <WrapperTop></WrapperTop>
          <Contents>
            <TrackName>{input}</TrackName>
            <NameOutput>{text} 님 환영합니다</NameOutput>
            <CloseModal onClick={deleteModal}>닫기</CloseModal>
          </Contents>
        </Wrapper>
      </ModalBackground>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  font-family: 'Black Han Sans', sans-serif;
  font-family: 'Noto Sans KR', sans-serif;
`;

const ModalBackground = styled.div`
  position: absolute;
  width: 1920px;
  height: 1080px;
  background: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  position: absolute;
  width: 678px;
  height: 322.82px;
  left: 620px;
  top: 328px;

  background: #ffffff;
  border-radius: 24px;
`;

const WrapperTop = styled.div`
  border-radius: 24px 24px 0 0;
  width: 678px;
  height: 44.2px;
  background: #bddaef;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
`;

const Contents = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;

  display: flex;
  height: 278.62px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TrackName = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  color: #3da0fc;
  opacity: 0.8;
`;

const NameOutput = styled.span`
  font-weight: 600;
  font-size: 25px;
  line-height: 34px;

  color: #333333;
  opacity: 0.8;

  margin-top: 22px;
  margin-bottom: 31px;
`;

const CloseModal = styled.button`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  padding: 8px 142px;
  gap: 10px;
  height: 43px;

  background: #81a7d3;
  border-radius: 24.5px;
  border: none;

  font-weight: 300;
  font-size: 20px;
  line-height: 27px;

  color: #ffffff;
  cursor: pointer;
`;

export default Modal;
