import { configureStore } from '@reduxjs/toolkit';
import detroitReducer from './detoritSlice';


export const store = configureStore({
  reducer: {
    detroitReducer : detroitReducer,
  },
});