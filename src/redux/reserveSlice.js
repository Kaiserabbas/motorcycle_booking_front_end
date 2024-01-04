import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { requestHeader, reservationsPath } from '../urls';

const getReserves = createAsyncThunk('getReservations', async () => {
  const result = await axios.get(reservationsPath, requestHeader);
  return result.data;
});

const postReserves = createAsyncThunk('postReservations', async (postDate) => {
  const result = await axios.post(reservationsPath, postDate, requestHeader);
  return result.data;
});

const reserveSlice = createSlice({
  name: 'reserve',
  initialState: { reserves: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReserves.fulfilled, (state, action) => {
        state.reserves = action.payload.data;
      })
      .addCase(postReserves.fulfilled, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default reserveSlice.reducer;
export { getReserves, postReserves };
