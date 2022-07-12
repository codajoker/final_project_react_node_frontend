import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refresh } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [logIn.fulfilled](state, action) {
      state.user = {
        name: action.payload.data.name,
        email: action.payload.data.email,
      };
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },

    [logIn.rejected](state) {
      state.isLoggedIn = false;
    },

    [register.rejected](state) {
      state.isLoggedIn = false;
    },

    [logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
    },

    [refresh.pending](state) {
      state.isRefreshing = true;
    },

    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },

    [refresh.rejected](state) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    },
  },
});
