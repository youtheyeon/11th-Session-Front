import React, {useReducer} from 'react';
import styled from 'styled-components';

function init(initialState) {
  if (initialState) return {count: initialState};
  else return {count: 0};
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.payload};
    case 'DECREMENT':
      return {count: state.count - action.payload};
    case 'RESET':
      return init(action.payload);
    default:
      throw new Error('unsupported action type: ', action.type);
  }
}

const FirstPage = ({initialCount}) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <PageWrapper>
      <Container>
        <h2>{state.count}</h2>
        <div>
          <button onClick={() => dispatch({type: 'RESET', payload: 0})}>
            초기화
          </button>
          <button onClick={() => dispatch({type: 'INCREMENT', payload: 1})}>
            +1
          </button>
          <button onClick={() => dispatch({type: 'DECREMENT', payload: 1})}>
            -1
          </button>
          <button onClick={() => dispatch({type: 'Error', payload: 1})}>
            에러
          </button>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default FirstPage;

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;

const Container = styled.div`
  width: 35%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: solid 2px gray;
  border-radius: 10px;
  background-color: white;
`;
