import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  const { setModal } = props;

  const deleteModal = () => {
    setModal(false);
  };
  return (
    <>
      <Wrapper>
        <Button onClick={deleteModal}>모달 삭제</Button>
      </Wrapper>
    </>
  );
};
export default Modal;

const Wrapper = styled.div`
  display: inline-block;
  color: purple;
  background-color: pink;
  font-size: 1em;
  font-weight: bolder;
  margin: 1em;
  padding: 1em;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: yellow;
  color: blue;
`;
