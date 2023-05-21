import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { detaildata } from '../../_mock/data';

const Comment = () => {
    const { id } = useParams();
    const [comments, setComments] = useState(detaildata[id - 1].comments);
    const today = new Date();
    const dateString =
        today.getFullYear() +
        '. ' +
        ('0' + (today.getMonth() + 1)).slice(-2) +
        '. ' +
        ('0' + today.getDate()).slice(-2) +
        ' ' +
        ('0' + today.getHours()).slice(-2) +
        ':' +
        ('0' + today.getMinutes()).slice(-2);
    const [newInput, setNewInput] = useState({
        id: comments.length + 1,
        nickname: '아기사자',
        content: '',
        created_at: dateString,
    });
    const handleInput = e =>
        setNewInput({
            id: comments.length + 1,
            nickname: '아기사자',
            content: e.target.value,
            created_at: dateString,
        });
    const [isAdded, setIsAdded] = useState(false);
    const [trigger, setTrigger] = useState(Date.now());
    const endRef = useRef(null);
    const OnSubmit = e => {
        e.preventDefault();
        if (newInput.content !== '') {
            console.log(newInput);
            setComments([...comments, newInput]);
            setNewInput({
                id: comments.length + 1,
                nickname: '아기사자',
                content: '',
                created_at: dateString,
            });
            setIsAdded(true);
            setTrigger(trigger + 1);
        }
    };
    useEffect(() => {
        if (isAdded) {
            endRef.current.scrollIntoView({ behavior: 'smooth' });
            setIsAdded(false);
        }
    }, [trigger]);

    return (
        <Wrapper>
            <Length>{`댓글 (${comments.length})`}</Length>
            {comments &&
                comments.map(item => (
                    <CommentContainer>
                        <div className='flex'>
                            <div className='nickname'>{item.nickname}</div>
                            <div className='date'>{item.created_at}</div>
                        </div>
                        <div className='content'>{item.content}</div>
                    </CommentContainer>
                ))}
            <div className='bottom' ref={endRef}></div>
            <CommentInputContainer onSubmit={OnSubmit}>
                <CommentInput value={newInput.content} onChange={handleInput} />
                <SubmitBtn type='submit'>작성</SubmitBtn>
            </CommentInputContainer>
        </Wrapper>
    );
};

export default Comment;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px;
`;
const Length = styled.div`
    width: 68%;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 30px;
`;
const CommentContainer = styled.div`
    width: 65%;
    box-shadow: 1px 2px 5px rgba(150, 150, 150, 0.3);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    .flex {
        display: flex;
        align-items: flex-end;
        margin-bottom: 7px;
    }
    .nickname {
        font-size: 1.1rem;
        font-weight: 600;
    }
    .date {
        color: dimgray;
        margin-left: 8px;
        font-size: 0.9rem;
    }
`;
const CommentInputContainer = styled.form`
    position: fixed;
    bottom: 0;
    background-color: white;
    box-shadow: 0px -2px 10px rgba(150, 150, 150, 0.2);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CommentInput = styled.input`
    width: 60%;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    outline: 0;
    margin-right: 10px;
    font-size: 1.1rem;
    padding-left: 10px;
`;
const SubmitBtn = styled.button`
    width: 70px;
    height: 44px;
    background-color: lightgray;
    color: white;
    border: 0;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
`;
