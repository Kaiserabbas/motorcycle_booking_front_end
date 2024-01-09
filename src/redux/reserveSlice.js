import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { reservationsPath } from '../urls';

const getReserves = createAsyncThunk('getReservations', async (requestHeader) => {
  try {
    const result = await axios.get(reservationsPath, requestHeader);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
});

const postReserves = createAsyncThunk('postReserves', async (requestObject) => {
  try {
    const result = await axios.post(reservationsPath, requestObject.data, requestObject.header);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
});

const reserveSlice = createSlice({
  name: 'reserve',
  initialState: {
    reserves: [],
    isLoading: false,
    success: false,
    postSuccess: false,
    error: false,
    information: '',
  },
  reducers: {
    clearInformation: (state) => {
      state.information = '';
    },
    setFalsePostSuccess: (state) => {
      state.postSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReserves.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.success = true;
          state.error = false;
          state.reserves = action.payload.data;
          state.isLoading = false;
        } else {
          state.success = false;
          state.error = true;
        }
      })
      .addCase(getReserves.pending, (state) => {
        state.information = 'Loading...';
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getReserves.rejected, (state) => {
        state.information = 'Connection Issues !';
        state.isLoading = false;
        state.error = true;
        state.success = false;
      })

      .addCase(postReserves.pending, (state) => {
        state.information = 'Reserving...';
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(postReserves.rejected, (state) => {
        state.information = 'Connection Issues !';
        state.isLoading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(postReserves.fulfilled, (state, action) => {
        state.information = action.payload.message;
        if (Array.isArray(state.information)) {
          state.error = true;
          state.success = false;
          state.postSuccess = false;
        } else {
          state.error = false;
          state.success = true;
          state.postSuccess = true;
        }
        state.isLoading = false;
      });
  },
});

export default reserveSlice.reducer;
export { getReserves, postReserves };
