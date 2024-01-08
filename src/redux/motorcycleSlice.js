import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { motorclesPath } from '../urls';

const getMotorcycles = createAsyncThunk('getMotorcycles', async (requestHeader) => {
  try {
    const result = await axios.get(motorclesPath, requestHeader);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
});

const postMotorcycles = createAsyncThunk('postMotorcycles', async (requestObject) => {
  try {
    const result = await axios.post(motorclesPath, requestObject.data, requestObject.header);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
});

const deleteMotorcycles = createAsyncThunk('deleteMotorcycles', async (requestObject) => {
  try {
    const result = await axios.delete(motorclesPath.concat(`/${requestObject.data}`), requestObject.header);
    return result.data;
  } catch (error) {
    return error;
  }
});

const motorcycleSlice = createSlice({
  name: 'motorcycle',
  initialState: {
    motorcycles: [],
    isLoading: false,
    success: false,
    error: false,
    postSuccess: false,
    information: '',
    toDeleteId: null,
  },

  reducers: {
    setToDelete: (state, action) => {
      state.toDeleteId = action.payload;
    },
    clearInformation: (state) => {
      state.information = '';
    },
    setFalsePostSuccess: (state) => {
      state.postSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMotorcycles.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.success = true;
          state.error = false;
          state.motorcycles = action.payload.data;
          state.isLoading = false;
        } else {
          state.success = false;
          state.error = true;
        }
      })
      .addCase(getMotorcycles.pending, (state) => {
        state.information = 'Loading...';
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getMotorcycles.rejected, (state) => {
        state.information = 'Connection Issues !';
        state.isLoading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(deleteMotorcycles.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload?.success) {
          state.error = false;
          state.success = true;
        } else {
          state.information = 'can not delete a reserved Motorcycle!';
          state.error = true;
          state.success = false;
        }
      })
      .addCase(deleteMotorcycles.pending, (state) => {
        state.information = 'Deleting...';
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(deleteMotorcycles.rejected, (state) => {
        state.information = 'Connection Issues !';
        state.isLoading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(postMotorcycles.pending, (state) => {
        state.information = 'Posting...';
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(postMotorcycles.rejected, (state) => {
        state.information = 'Connection Issues !';
        state.isLoading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(postMotorcycles.fulfilled, (state, action) => {
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

export default motorcycleSlice.reducer;
export const { setToDelete, setFalsePostSuccess, clearInformation } = motorcycleSlice.actions;
export { getMotorcycles, postMotorcycles, deleteMotorcycles };
