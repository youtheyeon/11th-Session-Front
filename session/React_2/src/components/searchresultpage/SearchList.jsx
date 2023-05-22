import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchItem from './SearchItem';
import { resultdata, navlinkresultdata } from '../../_mock/data';

const SearchList = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get('keyword');
    return (
        <Wrapper>
            {keyword === '아기사자' ? (
                <>
                    <Length>{`검색결과 약 ${resultdata.length}개`}</Length>
                    {resultdata.map(item => (
                        <SearchItem key={item.id} item={item} />
                    ))}
                </>
            ) : keyword === 'NavLink' ? (
                <>
                    <Length>{`검색결과 약 ${navlinkresultdata.length}개`}</Length>
                    {navlinkresultdata.map(item => (
                        <SearchItem key={item.id} item={item} />
                    ))}
                </>
            ) : (
                <>
                    <Length>검색결과 약 0개</Length>
                    <div className='none'>
                        <span>{keyword}</span>와(과) 일치하는 검색결과가
                        없습니다.
                    </div>
                </>
            )}
        </Wrapper>
    );
};

export default SearchList;

const Wrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 15%;
    .none {
        font-size: 1.2rem;
        span {
            font-weight: 600;
        }
    }
`;
const Length = styled.div`
    font-size: 0.9rem;
    color: #606367;
    margin-bottom: 30px;
`;
