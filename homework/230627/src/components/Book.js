import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {styled} from 'styled-components';
// Data
import {bookCover} from '../_mock/bookData';
// images
import likeIcon from '../images/likeIcon.svg';
import flikeIcon from '../images/fLikeIcon.svg';

const Book = (props) => {
  // book 정보와, myPage 여부 정보를 props로 받아옴
  const {book, isMyList} = props;
  const [likedList, setLikedList] = useState(['']);
  // userID 값을 localStorage에서 받아와서, 로그인 여부 저장
  const isLogin = localStorage.getItem('userID');

  const navigate = useNavigate();

  // 새로고침시 localStorage에 저장되어있는 좋아요 목록을 받아서 likedList state에 넣기
  useEffect(() => {
    JSON.parse(localStorage.getItem('likedList'))
      ? setLikedList(JSON.parse(localStorage.getItem('likedList')))
      : setLikedList(['']);
  }, []);

  // 좋아요 눌러서 book id를 저장하기
  const saveLike = (e) => {
    if (isLogin) {
      let updatedLikedList = [];
      if (localStorage.getItem('likedList')) {
        updatedLikedList = JSON.parse(localStorage.getItem('likedList'));
      }
      updatedLikedList = [...updatedLikedList, e.target.id];
      localStorage.setItem('likedList', JSON.stringify(updatedLikedList));
      setLikedList(updatedLikedList);
    } else {
      navigate('/login');
    }
  };
  // 좋아요 취소해서 book id 삭제하기
  const deleteLike = (e) => {
    if (isLogin) {
      const updatedLikedList = likedList.filter((item) => item !== e.target.id);
      localStorage.setItem('likedList', JSON.stringify(updatedLikedList));
      setLikedList(updatedLikedList);
    } else {
      navigate('/login');
    }
  };
  /* Book 컴포넌트는 categoryPage, MyPage 두 곳에서 사용하므로, 
    isMyList를 받아서 MyPage에서 사용하는 경우 likedList에 저장된 책만 보여줌
    categoryPage, MyPage 각 페이지에 맞는 Book 컴포넌트인지 확인하여 t/f 리턴 */
  const checkValid = (id) => {
    var isValid = true;
    isMyList && likedList.indexOf(String(id)) === -1 && (isValid = false);
    return isValid;
  };
  return (
    <>
      {checkValid(book.id) && (
        <Wrapper>
          <BookCover data={bookCover[book.id - 1]} />
          <TitleWrapper>
            {book.name}
            {likedList.indexOf(String(book.id)) !== -1 ? (
              <img id={book.id} src={flikeIcon} onClick={deleteLike} />
            ) : (
              <img id={book.id} src={likeIcon} onClick={saveLike} />
            )}
          </TitleWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default Book;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #6b6c6d;
  font-weight: 600;
`;

const BookCover = styled.div`
  width: 150px;
  height: 220px;
  background-image: url(${(props) => props.data});
  background-size: contain;
  background-repeat: no-repeat;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  img {
    width: 30px;
    height: 30px;
  }
`;
