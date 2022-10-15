import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register, getCurrentUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logout.pending]: (state, action) => {
      state.isLoading = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getCurrentUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.isLoggedIn = true;
      console.log(payload);
    },
    [getCurrentUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});
export default authSlice.reducer;
