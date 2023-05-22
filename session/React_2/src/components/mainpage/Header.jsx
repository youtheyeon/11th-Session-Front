import styled from 'styled-components';
import { TbGridDots } from 'react-icons/tb';

const Header = () => {
    return (
        <Wrapper>
            <Section>
                <Text>Google 정보</Text>
                <Text>스토어</Text>
            </Section>
            <Section>
                <Text>Gmail</Text>
                <Text>이미지</Text>
                <TbGridDots size='25' color='#606367' />
                <LoginBtn>로그인</LoginBtn>
            </Section>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Section = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 30px;
    svg {
        margin: 0 10px;
    }
`;
const Text = styled.p`
    padding: 0 15px;
    cursor: pointer;
`;
const LoginBtn = styled.div`
    background-color: #3870e0;
    color: #fff;
    font-weight: 600;
    padding: 10px 30px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
`;
