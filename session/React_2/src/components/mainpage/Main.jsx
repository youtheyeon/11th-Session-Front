import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import google from '../../assets/google.png';
import search from '../../assets/search.svg';
import keyboard from '../../assets/keyboard.svg';
import mic from '../../assets/mic.svg';
import lens from '../../assets/lens.svg';

const Main = () => {
    const navigate = useNavigate();

    // 검색창 input 상태 관리 로직
    const [inputValue, setInputValue] = useState('');
    const handleInput = e => {
        e.preventDefault();
        setInputValue(e.target.value);
    };
    // submit 이벤트 발생 시 URL 파라미터에 검색어를 넣어 결과 페이지로 이동
    const moveToResult = () => navigate(`/search?keyword=${inputValue}`);

    // input창이 focus 상태인지 감지하고 상태를 저장
    const [isFocus, setIsFocus] = useState(false);
    // input 태그 선택
    const searchInput = useRef(null);
    // document의 activeElememt를 이용해 현재 active인 요소가 searchInput인지 검사
    const clickInput = event => {
        if (document.activeElement === searchInput.current) setIsFocus(true);
        else setIsFocus(false);
    };
    // 첫 렌더링에 이벤트 리스너 추가
    useEffect(() => {
        document.addEventListener('click', clickInput);
    }, []);

    return (
        <Wrapper>
            <LogoImg src={google} alt='google logo' />
            <SearchContainer className={isFocus ? 'isFocus' : null}>
                <img src={search} className='search' />
                <form onSubmit={moveToResult}>
                    <SearchInput
                        value={inputValue}
                        onChange={handleInput}
                        ref={searchInput}
                    />
                </form>
                <img src={keyboard} className='keyboard' />
                <img src={mic} className='mic' />
                <img src={lens} className='lens' />
            </SearchContainer>
            <BtnContainer>
                <Btn>Google 검색</Btn>
                <Btn>I'm Feeling Lucky</Btn>
            </BtnContainer>
        </Wrapper>
    );
};

export default Main;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8%;
    .isFocus {
        //.input은 하나 상위에 쓰기
        border: 1px solid white;
        box-shadow: 1px 2px 7px rgba(150, 150, 150, 0.4);
    }
`;
const LogoImg = styled.img`
    width: 25%;
`;
const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 25px;
    margin: 30px 0;
    img {
        cursor: pointer;
    }
    .search {
        width: 4%;
        margin-left: 4%;
        margin-right: 10px;
    }
    .keyboard {
        width: 5%;
    }
    .mic {
        width: 3%;
        margin: 0 4%;
    }
    .lens {
        width: 4%;
        margin-right: 5%;
    }
    form {
        width: 70%;
    }
    :hover {
        border: 1px solid white;
        box-shadow: 1px 2px 7px rgba(150, 150, 150, 0.4);
    }
`;
const SearchInput = styled.input`
    width: 100%;
    height: 70%;
    border: 0;
    outline: 0;
    font-size: 1.2rem;
`;
const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const Btn = styled.div`
    background-color: ghostwhite;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
`;
