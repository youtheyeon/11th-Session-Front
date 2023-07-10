import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

function App() {
  // 리렌더링용 변수
  const [render, setRender] = useState(0);

  // ✏️ 작성자 이름 (본인 이름으로 수정)
  const author = '유서연';

  // ✏️ 지난 세션 때 잠깐 지나간 내용입니다! 아래 api 코드를 참고하여 작성해보세요.
  const BASE_URL = 'http://localhost:3001';

  // 전체 게시물 관리
  const [lists, setLists] = useState([]);
  // 새로운 글 내용 관리
  const [newContent, setNewContent] = useState('');

  // useEffect에 render가 들어간 이유가 무엇일까요? render의 값이 달라질 때마다 리렌더링을 하라는 코드인데, 그렇다면 언제 render의 값을 관리해야 할까요?
  // 리렌더링이 필요한 순간을 고민해보면 될 것 같아요! 게시물을 올리거나 지울 때 만약 변경 사항이 반영이 안된다면... 리렌더링이 필요하겠죠?
  useEffect(() => {
    getAllPost();
  }, [render]);

  // ✏️ api 코드 (API 명세서를 보면서 작성해주세요)

  // 모든 게시물 불러오기 (GET)
  const getAllPost = async () => {
    await axios
      .get(`${BASE_URL}/blog`)
      .then((response) => {
        setLists([...response.data]);
      })
      .catch((error) => console.log(error));
  };

  // ✏️ 게시물 업로드하기 (POST)
  // JSX를 살펴보면, newContent라는 변수를 value로 갖는 것을 알 수 있습니다. newContent를 데이터로 받아와 업로드 해야 할 것 같아요.
  // 받은 뒤에도 중요합니다! newContent를 빈칸으로 초기화하는 부분도 필요할 것 같아요.
  // API 명세서를 살펴보면 게시물을 업로드 할 때 필요한 정보가 2가지네요. 필요한 정보를 모두 담아 request 해주세요.
  // 게시물을 업로드 한 뒤에 변경사항이 즉각적으로 반영되도록 해주세요. 위의 render 변수를 활용해주세요.
  // 모든 코드는 async/await을 사용해서 작성해주세요! 위의 getAllPost 함수와 노션의 코드 블럭을 참고하세요.
  // id는 따로 추가하지 않아도, db에서 자동으로 추가되는 유니크한 값입니다! id를 임의로 추가하거나 제거하지 하지 말아주세요.
  const uploadPost = async (e) => {
    e.preventDefault();
    await axios
      .post(`${BASE_URL}/blog`, {
        content: newContent,
        author: author,
      })
      .then((response) => {
        setRender(render + 1);
        setNewContent('');
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  // ✏️ 게시물 삭제하기 (DELETE)
  // 게시물을 삭제하려면, 삭제하려는 게시물을 특정할 수 있어야해요. 인자로 유니크한 값을 받아와야합니다. 어떤 값을 받아올까요?
  // map 함수를 사용할 때, key를 지정해주지 않으면 콘솔에 warning이 뜨는 것 기억하시나요? 이 때 key는 반드시 유니크한 값이어야합니다.
  // 이를 활용하면 인자로 어떤 값을 받아올 지 알 수 있을 것 같아요.
  // 삭제 역시 변경사항이 즉각적으로 반영되도록 작성해주세요.
  const deletePost = async (id) => {
    await axios
      .delete(`${BASE_URL}/blog/${id}`)
      .then((response) => {
        setRender(render - 1);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  // ✏️ 게시물 수정하기 (PATCH)
  // 실습에는 게시물 수정이 없지만, 수정할 수 있는 함수를 만들어볼까요? DELETE와 POST를 합치면 PATCH가 될 것 같아요.
  // 만약 시간이 남는다면... 게시물 수정을 구현해봐도 좋아요.

  // const editPost = async (id) => {
  //   await axios
  //     .patch(`${BASE_URL}/blog/${id}`, {
  //       content: newContent,
  //       author: author,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const [editContent, setEditContent] = useState(); //수정할 내용 관리
  const [editId, setEditId] = useState(); //수정할 게시글의 아이디

  const submitEditedPost = async (id) => {
    await axios
      .patch(`${BASE_URL}/blog/${id}`, {
        content: editContent,
      })
      .then((response) => {
        setRender(render + 1);
        setEditId();
        setEditContent();
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  // JSX
  return (
    <>
      <Container>
        <form className='input-container' onSubmit={uploadPost}>
          <Input
            type='text'
            onChange={(e) => setNewContent(e.target.value)}
            value={newContent}
          />
          <SubmitButton>등록</SubmitButton>
        </form>
        {lists.map((list) => {
          return (
            <List key={list.id}>
              <div className='author-box'>작성자: {list.author}</div>
              {editId === list.id ? (
                <input
                  className='content-box'
                  type='text'
                  onChange={(e) => setEditContent(e.target.value)}
                  value={editContent || ''}
                  autoFocus
                />
              ) : (
                <div className='content-box'>{list.content}</div>
              )}
              <div className='button-box'>
                {editId === list.id ? (
                  <GrayButton onClick={() => submitEditedPost(list.id)}>
                    수정 완료
                  </GrayButton>
                ) : (
                  <GrayButton onClick={() => setEditId(list.id)}>
                    수정
                  </GrayButton>
                )}
                <GrayButton onClick={() => deletePost(list.id)}>
                  삭제
                </GrayButton>
              </div>
            </List>
          );
        })}
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 480px;
  padding: 20px;
  margin: 30px auto;

  .input-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const Input = styled.input`
  width: 380px;
  height: 40px;
  padding: 15px;
  border: solid 1px lightgrey;
  outline-color: lightslategray;
  border-radius: 20px;
  box-shadow: 0 7px 20px -10px rgba(150, 150, 150, 0.5);
`;

const SubmitButton = styled.button`
  width: 50px;
  height: 30px;
  padding: 5px;
  border-radius: 20px;
  background-color: lightslategray;
  color: #ededed;
  border: none;
`;

const List = styled.div`
  height: 100px;
  padding: 20px;
  border: solid 1px lightgray;
  border-radius: 20px;
  margin: 30px auto;
  box-shadow: 0 7px 20px -10px rgba(150, 150, 150, 0.5);
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .author-box {
    color: lightgray;
    font-size: 14px;
    margin-bottom: 4px;
  }

  .content-box {
    margin-bottom: 4px;
    overflow-y: auto;
  }

  .button-box {
    display: flex;
    justify-content: flex-end;
    width: 440px;
  }
`;

const GrayButton = styled.button`
  width: 80px;
  height: 25px;
  border-radius: 4px;
  border: none;
  margin-left: 4px;
  font-size: 12px;
  background-color: lightgrey;
  color: gray;
  cursor: pointer;
`;
