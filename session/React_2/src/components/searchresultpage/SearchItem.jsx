import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GoKebabVertical } from 'react-icons/go';

const SearchItem = props => {
    const { item } = props;
    const navigate = useNavigate();
    const moveToDetail = () => navigate(`/detail/${item.id}`);
    return (
        <Container>
            <LinkSection onClick={moveToDetail}>
                <div className='circle'>
                    <img src={item.url.logo} alt='website lofo' />
                </div>
                <div>
                    <div className='website'>{item.url.website}</div>
                    <div className='flex'>
                        <span className='url'>
                            {item.url.url + ' > ' + item.url.keyword}
                        </span>
                        <GoKebabVertical size='15' color='#606367' />
                    </div>
                </div>
            </LinkSection>
            <Title href={`/detail/${item.id}`}>{item.title}</Title>
            <ContentSection>
                <div className='date'>{item.created_at}</div>
                <div className='border' />
                <div className='content'>{item.content_preview}</div>
            </ContentSection>
        </Container>
    );
};

export default SearchItem;

const Container = styled.div`
    margin-bottom: 40px;
`;
const LinkSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    .circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 7px;
        img {
            width: 60%;
        }
    }
    .website {
        font-size: 0.9rem;
        margin-bottom: 2px;
    }
    .flex {
        display: flex;
        align-items: center;
        svg {
            margin-left: 10px;
        }
    }
    .url {
        font-size: 0.7rem;
        color: dimgray;
    }
`;
const Title = styled.a`
    color: #1919ad;
    font-size: 1.3rem;
    text-decoration: none;
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
    :visited {
        color: #551a8b;
    }
`;
const ContentSection = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    .date {
        font-size: 0.9rem;
        flex-shrink: 0;
    }
    .border {
        width: 12px;
        height: 0;
        border-bottom: 1px solid dimgray;
        margin: 0 5px;
        flex-shrink: 0;
    }
    .content {
        font-size: 0.9rem;
        flex-shrink: 0;
    }
`;
