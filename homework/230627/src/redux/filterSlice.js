import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

// 초기값 설정
const initialState = {
  filter: "소설",
};

export const filterSlice = createSlice({
  name: "filter", // slice 이름
  initialState, // 초기값
  // reducer 객체
  reducers: {
    // aciton과 reducer 로직
    initFilter: (state) => {
      state.filter = initialState.filter;
    },
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initFilter, setFilter } = filterSlice.actions;

export default filterSlice.reducer;
