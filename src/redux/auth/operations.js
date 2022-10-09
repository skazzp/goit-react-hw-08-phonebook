import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, logoutAPI, registerAPI } from 'sevices/mockAPI';

export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async (data, thunkAPI) => {
    try {
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
