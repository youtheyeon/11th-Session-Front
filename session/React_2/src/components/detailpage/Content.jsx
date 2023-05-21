import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { detaildata } from '../../_mock/data';

const Content = () => {
    const { id } = useParams();
    const [currentPost, setCurrentPost] = useState(detaildata[id - 1]);
    return (
        <Wrapper>
            <Title>{currentPost.title}</Title>
            <Profile>
                <div className='img-rect'>
                    <img src={currentPost.profile_img} alt='profile' />
                </div>
                <div className='text'>
                    {currentPost.nickname + ' | ' + currentPost.created_at}
                </div>
            </Profile>
            <Border />
            <Text>
                {currentPost.content &&
                    (currentPost.content.includes('\n') ? (
                        <>
                            {currentPost.content.split('\n').map(line => {
                                return (
                                    <span>
                                        {line}
                                        <br />
                                    </span>
                                );
                            })}
                        </>
                    ) : (
                        <>
                            <span>{currentPost.content}</span>
                        </>
                    ))}
            </Text>
            <Border />
        </Wrapper>
    );
};

export default Content;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.div`
    padding-top: 100px;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 50px;
`;
const Profile = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .img-rect {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .text {
    }
`;
const Border = styled.div`
    width: 70%;
    height: 0;
    border-bottom: 1px solid lightgray;
    margin: 30px 0 60px 0;
`;
const Text = styled.div`
    width: 68%;
    padding-bottom: 80px;
    font-weight: 400;
    line-height: 150%;
`;
