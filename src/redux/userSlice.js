import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginPath, usersPath } from '../urls';

const loginUser = createAsyncThunk('login', async (userData) => {
  try {
    const result = await axios.post(loginPath, { user: { ...userData } });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
});

const signupUser = createAsyncThunk('signupUser', async (newUserData) => {
  try {
    const result = await axios.post(usersPath, { user: { ...newUserData } });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    icon: 'bars',
    currentUser: null,
    isLoading: false,
    success: false,
    error: false,
    information: '',
    requestHeader: null,
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.token = null;
      state.isLoading = false;
      state.success = false;
      state.error = false;
      state.information = 'Logout Successfully';
      state.requestHeader = null;
    },
    cleanMessage: (state) => {
      state.information = false;
    },
    setIconUser: (state) => {
      state.icon = 'bars';
    },
    setnewIconUser: (state, action) => {
      state.icon = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.information = 'Created Your Account';
        if (action.payload?.error) {
          state.error = true;
          state.success = false;
        } else {
          state.success = true;
          state.error = false;
        }
      })
      .addCase(signupUser.pending, (state) => {
        state.information = 'Loading...';
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(signupUser.rejected, (state) => {
        state.information = 'Connection Issues !';
        state.isLoading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload?.error) {
          state.error = true;
          state.information = action.payload.message;
        } else {
          state.success = true;
          state.currentUser = action.payload.user;
          state.information = action.payload.message;
          state.requestHeader = { headers: { Authorization: `Bearer ${action.payload.token}`, 'Content-Type': 'application/json' } };
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.information = 'Loading...';
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.information = 'Connection Issues !';
        state.isLoading = false;
        state.error = true;
        state.success = false;
      });
  },
});

export default userSlice.reducer;
export const {
  logout, cleanMessage, setIconUser, setnewIconUser,
} = userSlice.actions;
export { loginUser, signupUser };
