import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import google from '../../assets/google.png';
import close from '../../assets/close.svg';
import search from '../../assets/search.svg';
import keyboard from '../../assets/keyboard.svg';
import mic from '../../assets/mic.svg';
import lens from '../../assets/lens.svg';
import setting from '../../assets/setting.svg';
import menu from '../../assets/menu.svg';

const SearchHeader = () => {
    const navigate = useNavigate();

    // (1) useLocation과 URLSearchParams 사용하여 쿼리 스트링 추출하기
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const keyword = queryParams.get('keyword');

    // (2) useSearchParams 사용하여 쿼리 스트링 추출하기
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    // 검색창 input 상태 관리 로직
    const [inputValue, setInputValue] = useState('');
    const handleInput = e => {
        e.preventDefault();
        setInputValue(e.target.value);
    };
    // input창이 비어있다면
    useEffect(() => {
        if (!inputValue) setInputValue(keyword); //문자열이 비어 있으면 false로 취급
    }, []);
    const moveToResult = e => {
        e.preventDefault();
        navigate(`/search?keyword=${inputValue}`);
    };

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
            <Logo
                src={google}
                onClick={() => navigate('/')}
                alt='google logo'
            />
            <SearchContainer
                onSubmit={moveToResult}
                className={isFocus ? 'isFocus' : null}
            >
                <SearchInput
                    value={inputValue || ''}
                    onChange={handleInput}
                    ref={searchInput}
                />
                <img src={close} className='close' />
                <div className='border' />
                <img src={keyboard} className='keyboard' />
                <img src={mic} className='mic' />
                <img src={lens} className='lens' />
                <img src={search} className='search' type='submit' />
            </SearchContainer>
            <div className='inner'>
                <img src={setting} className='setting' />
                <img src={menu} className='menu' />
                <div className='circle'></div>
            </div>
        </Wrapper>
    );
};

export default SearchHeader;

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid lightgray;
    .inner {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 20%;
        padding-right: 2%;
        img {
            cursor: pointer;
        }
        .setting {
            width: 25px;
        }
        .menu {
            width: 18px;
            padding: 0 20px;
        }
        .circle {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: #d9d9d9;
        }
    }
    .isFocus {
        box-shadow: 1px 2px 8px rgba(150, 150, 150, 0.6);
    }
`;
const Logo = styled.img`
    width: 10%;
    padding-left: 3%;
    cursor: pointer;
`;
const SearchContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 46px;
    border-radius: 23px;
    border: 0;
    outline: 0;
    box-shadow: 1px 2px 7px rgba(150, 150, 150, 0.4);
    :hover {
        box-shadow: 1px 2px 8px rgba(150, 150, 150, 0.6);
    }
    .close {
        width: 2.7%;
    }
    .border {
        width: 0px;
        height: 30px;
        border-left: 1px solid lightgray;
        margin: 0 10px;
    }
    .keyboard {
        width: 4.5%;
    }
    .mic {
        width: 2.8%;
    }
    .lens {
        width: 3.7%;
    }
    .search {
        width: 3%;
        padding-right: 4%;
    }
    img {
        cursor: pointer;
        padding: 0 1%;
    }
`;
const SearchInput = styled.input`
    width: 60%;
    height: 33px;
    border: 0;
    outline: 0;
    font-size: 1rem;
    margin-left: 3%;
`;
