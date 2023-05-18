import React from "react";

const Name = (props) => {
  const { name, nth, isFE } = props;
  const style = {
    backgroundColor: "black",
    color: "orange",
  };
  return (
    <>
      {isFE ? (
        <div style={style}>
          {nth}기 프론트엔드 {name}입니다.
        </div>
      ) : null}
    </>
  );
};
Name.defaultProps = {
  name: "이채원",
};
export default Name;
