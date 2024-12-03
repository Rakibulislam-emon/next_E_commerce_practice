import { configureStore } from '@reduxjs/toolkit';
import shofyReducer from './shofySlice'; // Ensure this import is correct

export const store = configureStore({
  reducer: {
    shofy: shofyReducer, 
  },
});
