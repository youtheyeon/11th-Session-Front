//Mypage
import React from "react";
import { useSelector } from "react-redux";

const MyPage = () => {
  const { userName, userID } = useSelector((state) => state.user);
  return (
    <>
      <div>
        <div>
          {userName}({userID})님 반갑습니다.
        </div>
      </div>
    </>
  );
};

export default MyPage;
