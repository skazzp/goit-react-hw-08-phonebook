import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { loginAPI, logoutAPI, registerAPI } from 'sevices/mockAPI';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/signup`, user);
      token.set(data.token);
      console.log('reg response', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post(`/users/login`, user);
    token.set(data.token);
    console.log('login response', data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async (data, thunkAPI) => {
    try {
      await axios.post(`/users/logout`);
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const authState = thunkAPI.getState().auth;
    if (!authState.token) {
      console.log('no token', authState);
      return thunkAPI.rejectWithValue('no token');
    }
    console.log(authState.token);
    token.set(authState.token);
    try {
      const { data } = await axios.get(`/users/current`);
      console.log('get resp', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
