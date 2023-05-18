import React, { useState } from "react";
import styled from "styled-components";
// components
import RegisterBox from "./components/RegisterBox";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    pw2: "",
  });
  // inputs state 구조 분해 할당
  const { id, pw, pw2 } = inputs;

  // input 확인 함수
  const checkInputs = () => {
    console.log();
    var checkMode = 0;
    // 1 회원가입 완료, 2 비밀번호 미충족, 3. 아이디 미총족, 4. 아이디, 비밀번호 둘다 미충족
    id.length >= 4 && pw === pw2 && pw.length >= 4
      ? (checkMode = 1)
      : id.length >= 4 && (pw !== pw2 || pw.length < 4)
      ? (checkMode = 2)
      : id.length < 4 && pw === pw2 && pw.length >= 4
      ? (checkMode = 3)
      : id.length < 4 && (pw !== pw2 || pw.length < 4) && (checkMode = 4);
    return checkMode;
  };
  return (
    <>
      <Wrapper>
        {modal ? (
          <Modal setModal={setModal} id={id} checkInputs={checkInputs()} />
        ) : null}
        <RegisterBox
          inputs={inputs}
          setInputs={setInputs}
          setModal={setModal}
        />
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
