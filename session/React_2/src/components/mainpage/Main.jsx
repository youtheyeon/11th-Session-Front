import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrSearch } from 'react-icons/gr';
import { MdKeyboard, MdMic } from 'react-icons/md';
import { SiGooglelens } from 'react-icons/si';

const Main = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const handleInput = e => {
        e.preventDefault();
        setInputValue(e.target.value);
    };
    const moveToResult = () => navigate(`/search?keyword=${inputValue}`);
    return (
        <Wrapper>
            <LogoImg
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png'
                alt='google logo'
            />
            <SearchContainer>
                <GrSearch size='20' color='#606367' />
                <form onSubmit={moveToResult}>
                    <SearchInput value={inputValue} onChange={handleInput} />
                </form>
                <MdKeyboard size='25' color='#606367' />
                <MdMic size='25' color='#606367' />
                <SiGooglelens size='20' color='#606367' />
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
`;
const LogoImg = styled.img`
    width: 25%;
`;
const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 25px;
    margin: 30px 0;
    svg {
        padding: 0 15px;
        cursor: pointer;
    }
    form {
        width: 70%;
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
