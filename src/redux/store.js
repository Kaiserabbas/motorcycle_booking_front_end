import { configureStore } from '@reduxjs/toolkit';
import reserveReducer from './reserveSlice';
import motorcycleReducer from './motorcycleSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    reserve: reserveReducer,
    motorcycle: motorcycleReducer,
    user: userReducer,
  },
});

export default store;
