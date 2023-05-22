import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { MdSettings, MdClose, MdKeyboard } from 'react-icons/md';
import { CgMenuGridO } from 'react-icons/cg';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdMic } from 'react-icons/io';
import { SiGooglelens } from 'react-icons/si';

const SearchHeader = () => {
    const navigate = useNavigate();
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const keyword = queryParams.get('keyword');
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    const [inputValue, setInputValue] = useState('');
    const handleInput = e => {
        e.preventDefault();
        setInputValue(e.target.value);
    };
    useEffect(() => {
        setInputValue(keyword);
    }, [keyword]);
    useEffect(() => {
        if (!inputValue) setInputValue(keyword);
    }, []);
    const moveToResult = e => {
        e.preventDefault();
        navigate(`/search?keyword=${inputValue}`);
    };
    return (
        <Wrapper>
            <Logo
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png'
                onClick={() => navigate('/')}
                alt='google logo'
            />
            <SearchContainer onSubmit={moveToResult}>
                <SearchInput value={inputValue || ''} onChange={handleInput} />
                <MdClose size='25' color='#606367' />
                <div className='border' />
                <MdKeyboard size='26' color='#606367' />
                <IoMdMic size='25' color='#606367' />
                <SiGooglelens size='20' color='#606367' />
                <AiOutlineSearch
                    size='25'
                    color='#3870e0'
                    className='last'
                    type='submit'
                />
            </SearchContainer>
            <div className='inner'>
                <MdSettings size='28' color='#606367' />
                <CgMenuGridO size='30' color='#606367' />
                <BsPersonCircle size='30' color='#a8a9aa' />
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
        svg {
            padding: 3%;
            cursor: pointer;
        }
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
    .border {
        width: 0px;
        height: 30px;
        border-left: 1px solid lightgray;
    }
    .last {
        padding-right: 3%;
    }
    svg {
        cursor: pointer;
    }
`;
const SearchInput = styled.input`
    width: 63%;
    height: 33px;
    border: 0;
    outline: 0;
    font-size: 1rem;
    margin-left: 3%;
`;
