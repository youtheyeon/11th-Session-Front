import React, {useState, useEffect} from 'react';
import {styled} from 'styled-components';
// components
import AdModal from '../components/AdModal';
import TopBar from '../components/TopBar';
import Book from '../components/Book';
// images
import category from '../images/category.svg';
// Data
import {bookData} from '../_mock/bookData';
import {setFilter} from '../redux/filterSlice';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const CategoryPage = () => {
  const categories = ['소설', '에세이', '인문'];
  // 모달 관리 state
  const [modal, setModal] = useState('true');

  // 새로고침시 쿠키에 modal 저장값이 만료되었으면 모달을 보여주고, 관련 쿠키가 있으면 모달을 숨김
  useEffect(() => {
    const cookieData = document.cookie.split(';');
    const modalCookie = cookieData.find((cookie) =>
      cookie.trim().startsWith('modalCookie=')
    );

    modalCookie ? setModal(false) : setModal(true);
  }, []);
  //--------------------------------------------------
  // 문제 1) 30분 후 만료되는 모달 쿠키를 만들고, modal 닫는 closeModal 함수
  const closeModal = () => {
    document.cookie = 'modalCookie="valid"; max-age=20';
    setModal(false);
  };
  // 문제 2) filterSlice의 filter 받아오기, dispatch 사용 선언
  const {filter} = useSelector((state) => state.filter); // 가짜 코드, 실제 filter 받아오고 삭제해주세요!
  const dispatch = useDispatch();

  // 문제 3) dispatch 사용 카테고리 변경 저장하는 saveCategory함수
  const saveCategory = (e) => {
    dispatch(setFilter({filter: e.target.id}));
  };
  //----------------------------------------------------
  //선택한 카테고리와 일치하는 bookData만 받아서 (filter 함수 사용) 저장
  const bookList = bookData.filter((book) => book.category == filter);
  return (
    <>
      {modal && <AdModal closeModal={closeModal} />}
      <Wrapper>
        <Container>
          <TopBar />
          <FilterBar>
            {categories.map((category) => (
              <Category
                id={category}
                checked={filter === category}
                onClick={saveCategory}
              >
                {category}
              </Category>
            ))}
          </FilterBar>
          <BookList>
            {bookList.map((book) => (
              <Book book={book} />
            ))}
          </BookList>
        </Container>
      </Wrapper>
    </>
  );
};

export default CategoryPage;

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
const FilterBar = styled.div`
  width: 100%;
  max-width: 400px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-style: none none solid none;
  border-bottom: solid 1px #cedff9;
`;
const Category = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.checked ? '#ffffff' : '#9b9b9b')};
  font-size: 18px;
  font-weight: 600;
  background-image: ${(props) => (props.checked ? `url(${category})` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
`;

const BookList = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`;
