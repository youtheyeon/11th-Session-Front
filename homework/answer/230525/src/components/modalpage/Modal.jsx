import styled from "styled-components";

// props로 받아올 상태 변경 함수 구조 분해 할당
const Modal = ({ toggleModal }) => {
	return (
		<Wrapper>
			{/* 배경을 클릭하면 모달창이 닫힘 */}
			<ModalBackground onClick={toggleModal} />
			{/* 배경보다 z-index가 높은 모달창은 클릭해도 닫히지 않음 */}
			<ModalDiv>모달창</ModalDiv>
		</Wrapper>
	);
};

export default Modal;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	width: 100%;
	height: 100vh;
	z-index: 5;
`;

const ModalBackground = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
`;

const ModalDiv = styled.div`
	z-index: 10;
	width: 40%;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background-color: thistle;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
	font-size: 2rem;
	font-weight: 600;
`;
