import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/counterSlice";

const HomePage = () => {
  const { number } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  return (
    <>
      {/* counter 실습 */}
      <div>
        <h1>{number}</h1>
        <div>
          <button onClick={onIncrease}>+</button>
          <button onClick={onDecrease}>-</button>
        </div>
      </div>
      <LinkWrapper>
        <a href="/login">login</a>
      </LinkWrapper>
    </>
  );
};

export default HomePage;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
