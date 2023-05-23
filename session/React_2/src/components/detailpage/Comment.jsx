import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { detaildata } from '../../_mock/data';

const Comment = () => {
    // 게시글 id를 URL 파라미터에서 가져오기
    const { id } = useParams();

    // id를 사용해서 특정 게시글의 댓글만 가져와 useState의 initialValue로 설정
    const [comments, setComments] = useState(detaildata[id - 1].comments);

    // 현재 시각을 YYYY. MM. DD HH:MM 형식으로 저장
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

    // 추가될 새로운 댓글을 저장할 useState
    const [newComment, setNewComment] = useState({
        id: comments.length + 1,
        nickname: '아기사자',
        content: '',
        created_at: dateString,
    });
    // input에 입력받은 content를 newComment에 저장하는 함수
    const handleInput = e =>
        setNewComment({
            ...newComment,
            content: e.target.value,
        });

    // 새로운 댓글 작성 시 댓글이 보이도록 가장 아래로 스크롤
    // 댓글이 새로 추가되었는지 아닌지 여부를 저장
    const [isAdded, setIsAdded] = useState(false);
    // trigger가 변하면 댓글이 추가된건지 아닌지 검사하고 스크롤을 아래로 내릴 예정
    const [trigger, setTrigger] = useState(Date.now());
    // 가장 마지막 댓글 아래에 div를 추가하고 useRef로 선택
    const endRef = useRef(null);
    // submit 이벤트가 발생했을 때 실행할 함수
    const OnSubmit = e => {
        e.preventDefault();
        // input이 비어있으면 실행 안됨
        if (newComment.content !== '') {
            // 댓글들이 있는 배열에 새로운 댓글 추가
            setComments([...comments, newComment]);
            // 다음 댓글도 달아야하므로 새로운 댓글은 초기화
            setNewComment({
                id: comments.length + 1,
                nickname: '아기사자',
                content: '',
                created_at: dateString,
            });
            // 댓글이 추가되었으므로 스크롤을 내리기 위한 로직
            setIsAdded(true);
            setTrigger(trigger + 1);
        }
    };
    // trigger가 변할 때 새로운 댓글이 추가된 경우,
    // 스크롤을 내린 뒤 isAdded를 false로 변경
    useEffect(() => {
        if (isAdded) {
            endRef.current.scrollIntoView({ behavior: 'smooth' });
            setIsAdded(false);
        }
    }, [trigger]);

    // 댓글 input창 선택
    const inputRef = useRef(null);
    // 첫 렌더링에서 3초 후 input창을 focus
    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 3000);
    }, []);

    return (
        <Wrapper>
            <Length>{`댓글 (${comments.length})`}</Length>
            {comments &&
                comments.map(item => (
                    <CommentContainer key={item.id}>
                        <div className='flex'>
                            <div className='nickname'>{item.nickname}</div>
                            <div className='date'>{item.created_at}</div>
                        </div>
                        <div className='content'>{item.content}</div>
                    </CommentContainer>
                ))}
            <div className='bottom' ref={endRef}></div>
            <CommentInputContainer onSubmit={OnSubmit}>
                <CommentInput
                    value={newComment.content}
                    onChange={handleInput}
                    ref={inputRef}
                />
                <SubmitBtn type='submit' isEmpty={newComment.content === ''}>
                    작성
                </SubmitBtn>
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
    outline: 0;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 1.1rem;
    padding-left: 10px;
    :focus {
        outline: 1px solid dimgray;
    }
`;
const SubmitBtn = styled.button`
    width: 70px;
    height: 44px;
    background-color: ${props => (props.isEmpty ? 'lightgray' : 'dimgray')};
    color: white;
    border: 0;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
`;
