import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

import todoSlice from '../features/todoSlice';

const persistConfig = {
  key: 'todolistdata',
  storage,
};
const reducers = combineReducers({
  todos: todoSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer
});
