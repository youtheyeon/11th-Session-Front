import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {counterSlice} from './counterSlice';
import {userSlice} from './userSlice';

const reducers = combineReducers({
  //여러 개의 reducer 묶어서 관리
  counter: counterSlice.reducer,
  user: userSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage, //로컬 스토리지
};

const persistedReducer = persistReducer(persistConfig, reducers); //영구 저장

export const store = configureStore({
  //store 선언
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
