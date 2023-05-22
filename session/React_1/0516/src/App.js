import React, {useState} from 'react';
import Name from './components/Name';
import Counter from './components/Counter';
import Input from './components/Input';
import Modal from './components/Modal';

function App() {
  const [modal, setModal] = useState('false');
  const openModal = () => {
    setModal(true);
  };

  return (
    <>
      <Name />
      <Counter />
      <Input />
      <hr />
      <button onClick={openModal}>모달 열기</button>
      {modal ? <Modal setModal={setModal} /> : null}
    </>
  );
}

export default App;
