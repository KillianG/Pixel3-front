import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import walletConnection from "../features/walletConnection/walletConnectionSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    walletConnection: walletConnection
  },
});
