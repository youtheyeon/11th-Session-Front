import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  const {setModal} = props;

  const deleteModal = () => {
    setModal(false);
  };

  return (
    <div>
      <ModalWrapper>
        <DeleteButton onClick={deleteModal}>모달 삭제</DeleteButton>
      </ModalWrapper>
    </div>
  );
};

const DeleteButton = styled.button`
  width: 100px;
  height: 80px;
  background-color: whitesmoke;
  color: orange;
  border: orange;
  border-radius: 20px;
`;

const ModalWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;

  background-color: orange;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export default Modal;
