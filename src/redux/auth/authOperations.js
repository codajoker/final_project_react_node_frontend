import { createAsyncThunk } from '@reduxjs/toolkit';
import * as usersAPI from '../../services/users-api';
import {
  registerSuccessToast,
  alreadyHaveEmailToast,
  successfulLoginToast,
  errorLoginToast,
} from '../../components/RegistrationForm/authToasts';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await usersAPI.registerUser(credentials);
      registerSuccessToast();
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
      return rejectWithValue(error.message);
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

export const refresh = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue();
    }

    const response = await usersAPI.currentUserRefresh(persistedToken);
    return response;
  }
);
