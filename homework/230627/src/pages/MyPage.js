import React from 'react';
import {useNavigate} from 'react-router-dom';
import {styled} from 'styled-components';
//components
import TopBar from '../components/TopBar';
import Book from '../components/Book';
//images
import book from '../images/book.png';
//data
import {bookData} from '../_mock/bookData';
//redux
import {useDispatch} from 'react-redux';
import {initFilter} from '../redux/filterSlice';

const MyPage = () => {
  const navigate = useNavigate();
  // -----------------------------------------------------------------
  // 문제 1) userName localStorage에서 꺼내서 변수에 저장
  const userName = window.localStorage.getItem('userName');
  // 문제 2) localStorage 저장 값 삭제, redux 초기화, login 페이지로 이동
  const dispatch = useDispatch();
  const logout = () => {
    // userName, userID 삭제
    // likedList 삭제
    // filter 초기화
    // login 페이지로 이동
    window.localStorage.removeItem('userName');
    window.localStorage.removeItem('userID');
    window.localStorage.removeItem('likedList');
    dispatch(initFilter());
    navigate('/login');
  };
  //--------------------------------------------------------------------
  return (
    <>
      <Wrapper>
        <Container>
          <TopBar />
          <NameContainer>
            <img src={book} />
            {/* userName 받아오고 나서 아래 주석 해제 */}
            {userName}님
          </NameContainer>
          <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
          <LikedContainer>
            <p>좋아한 책 목록</p>
            <BookList>
              {bookData.map((book) => (
                <Book book={book} isMyList={true} />
              ))}
            </BookList>
          </LikedContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NameContainer = styled.div`
  width: 273px;
  height: 101px;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #d1def0;
  border-radius: 20px;

  font-size: 27px;
  font-weight: 600;
  color: #6b6c6d;
  img {
    width: 70px;
    margin-right: 5px;
  }
`;
const LogoutBtn = styled.div`
  width: 65%;
  text-align: right;
  text-decoration: underline;
  margin-top: 10px;
  color: #6b6c6d;
`;
const LikedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7%;
  p {
    padding: 0 0 10px 20px;
    border-style: none none solid none;
    border-bottom: solid 1px #9b9b9b;
    color: #6b6c6d;
    font-weight: 600;
    font-size: 18px;
  }
`;
const BookList = styled.div`
  width: 100%;
  margin-top: 10px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`;
