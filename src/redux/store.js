import { configureStore } from '@reduxjs/toolkit';
import reserveReducer from './reserveSlice';

const store = configureStore({
  reducer: { reserve: reserveReducer },
});

export default store;
