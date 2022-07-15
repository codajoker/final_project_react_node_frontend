import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, refreshToken } from './authOperations';

const initialState = {
  user: { name: null, email: null, dailyCalories: null },
  token: null,
  tokenExpires: null,
  isRefreshing: false,
  isLoggedIn: false,
  isRegister: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state) {
      state.isRegister = true;
    },

    [logIn.fulfilled](state, action) {
      state.user = {
        name: action.payload.data.name,
        email: action.payload.data.email,
        dailyCalories: action.payload.data.dailyCalories,
      };
      state.token = action.payload.data.token;
      state.tokenExpires = action.payload.data.tokenExpires;
      state.isLoggedIn = true;
    },

    [register.rejected](state) {
      state.isRegister = false;
    },

    [logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
      state.isRegister = initialState.isRegister;
      state.token = initialState.token;
    },

    [logOut.rejected](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
      state.isRegister = initialState.isRegister;
      state.token = initialState.token;
    },

    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },

    [refreshUser.fulfilled](state, action) {
      state.user = {
        name: action.payload.data.name,
        email: action.payload.data.email,
        dailyCalories: action.payload.data.dailyCalories,
      };
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },

    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },

    [refreshToken.fulfilled](state, action) {

    
      state.token = action.payload.data.token;
      state.tokenExpires = action.payload.data.tokenExpires;
    },
  },
});
