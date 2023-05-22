import React, {useState} from 'react';
import Modal from './components/Modal';
import styled, {createGlobalStyle} from 'styled-components';
import designIcon from './images/image49.png';
import frontIcon from './images/image50.png';
import backIcon from './images/image51.png';

function App() {
  const [text, setText] = useState('');
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const trackDesign = () => {
    setInput('기획 & 디자인');
  };

  const trackFront = () => {
    setInput('프론트엔드');
  };

  const trackBack = () => {
    setInput('백엔드');
  };

  const openModal = () => {
    if (text.length !== 0 && input.length !== 0) setModal(true); //text 값과 input값이 없으면 modal을 띄우지 않음
  };

  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <NameBox>
          <H2>Create a nameModal</H2>
          <H1>이름 모달 만들기</H1>
          <Hr></Hr>
          <InnerBox>
            <span>아기사자의 이름을 입력해주세요</span>
            <NameInput
              onChange={onChange}
              value={text}
              placeholder='아기사자'
            ></NameInput>

            <span>트랙을 선택해주세요</span>
            <ButtonContainer>
              <ButtonList>
                <Track
                  onClick={trackDesign}
                  src={designIcon}
                  alt='design'
                ></Track>
                <ButtonName>기획&디자인</ButtonName>
              </ButtonList>
              <ButtonList>
                <Track onClick={trackFront} src={frontIcon} alt='front'></Track>
                <ButtonName>프론트엔드</ButtonName>
              </ButtonList>
              <ButtonList>
                <Track onClick={trackBack} src={backIcon} alt='back'></Track>
                <ButtonName>백엔드</ButtonName>
              </ButtonList>
            </ButtonContainer>
          </InnerBox>

          <OpenModal onClick={openModal}>이름 모달 만들기</OpenModal>
          {modal ? (
            <Modal setModal={setModal} text={text} input={input} />
          ) : null}
        </NameBox>
      </Wrapper>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  font-family: 'Black Han Sans', sans-serif;
  font-family: 'Noto Sans KR', sans-serif;
`;

const NameBox = styled.div`
  width: 754px;
  height: 654px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  color: #333333;
`;

const H2 = styled.span`
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  font-style: normal;
  margin-bottom: 6px;
`;

const H1 = styled.h1`
  font-weight: 600;
  font-size: 35px;
  line-height: 48px;
  margin-top: 0px;
  margin-bottom: 43px;
`;

const Hr = styled.div`
  width: 641px;
  height: 0px;
  border: 1.5px solid #d7d7d7;
  margin-bottom: 64px;
`;

const Wrapper = styled.div`
  background-color: #d8e4ec;
  width: 1920px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  color: #414141;
`;

const ButtonContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-bottom: 22px;
`;

const ButtonList = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonName = styled.span`
  margin-top: 16px;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #414141;
`;

const NameInput = styled.input`
  width: 516px;
  height: 51px;
  box-sizing: border-box;
  background: #ffffff;
  border: 0.8px solid #979797;
  box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
  border-radius: 10px;

  margin-top: 16px;
  margin-bottom: 55px;
  padding-left: 24px;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.1em;

  color: #414141;
`;

const Track = styled.img`
  width: 60px;
  height: 60px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
`;

const OpenModal = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  padding: 9px 142px;
  gap: 10px;
  background: #81a7d3;
  border-radius: 24.5px;

  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  cursor: pointer;
`;

export default App;
