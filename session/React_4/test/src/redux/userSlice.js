import {createSlice} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';
import counterSlice from './counterSlice';

const initialState = {
  userID: '',
  userName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    initUser: (state) => {
      state.userID = initialState.userID;
      state.userName = initialState.userName;
    },
    setUser: (state, action) => {
      state.userID = action.payload.userID;
      state.userName = action.payload.userName;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const {initUser, setUser} = counterSlice.actions;
export default userSlice.reducer;
