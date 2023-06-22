import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

// 초기값 설정
const initialState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: "counter", // slice 이름
  initialState, // 초기값
  // reducer 객체
  reducers: {
    // aciton과 reducer 로직
    initCounter: (state) => {
      state.number = 0;
    },
    increase: (state) => {
      state.number++;
    },
    decrease: (state) => {
      state.number--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initCounter, increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
