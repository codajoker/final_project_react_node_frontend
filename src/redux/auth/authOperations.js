import { createAsyncThunk } from '@reduxjs/toolkit';
import * as usersAPI from '../../services/usersApi';
import {
  registerSuccessToast,
  alreadyHaveEmailToast,
  successfulLoginToast,
  errorLoginToast,
  verificationSuccessToast,
} from '../../helpers/authToasts';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await usersAPI.registerUser(credentials);
      registerSuccessToast();
      if (response.data.verificationToken) {
        verificationSuccessToast();
      }
      return response;
    } catch (error) {
      alreadyHaveEmailToast();
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await usersAPI.logInUser(credentials);
      successfulLoginToast();
      return response;
    } catch (error) {
      errorLoginToast();
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await usersAPI.logOutUser(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk('auth/current', async () => {
  return await usersAPI.currentUserRefresh();
});

export const refreshToken = createAsyncThunk('auth/refresh-token', async () => {
  return await usersAPI.refreshToken();
});

export const verifyUser = createAsyncThunk(
  'auth/verify/:verificationToken',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await usersAPI.verifiedUser(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
