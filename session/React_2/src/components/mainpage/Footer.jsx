import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <Top>
                <TopText>대한민국</TopText>
            </Top>
            <Bottom>
                <BottomSection>
                    <BottomText>광고</BottomText>
                    <BottomText>비즈니스</BottomText>
                    <BottomText>검색의 원리</BottomText>
                </BottomSection>
                <BottomSection>
                    <BottomText>개인정보처리방침</BottomText>
                    <BottomText>약관</BottomText>
                    <BottomText>설정</BottomText>
                </BottomSection>
            </Bottom>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: whitesmoke;
`;
const Top = styled.div`
    display: flex;
`;
const TopText = styled.p`
    padding-left: 30px;
    font-weight: 600;
    color: gray;
    cursor: pointer;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-evenly;
    border-top: 1px solid lightgray;
`;
const BottomSection = styled.div`
    display: flex;
`;
const BottomText = styled.p`
    padding: 0 10px;
    font-weight: 500;
    color: dimgray;
    cursor: pointer;
`;
