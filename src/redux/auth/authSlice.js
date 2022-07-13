import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refresh } from './authOperations';

const initialState = {
  user: { name: null, email: null, dailyCalories: null },
  token: null,
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
      state.isLoggedIn = true;
    },

    [logIn.rejected](state) {
      state.isLoggedIn = false;
    },

    [register.rejected](state) {
      state.isRegister = false;
    },

    [logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
      state.isRegister = initialState.isRegister;
    },

    [refresh.pending](state) {
      state.isRefreshing = true;
    },

    [refresh.fulfilled](state, action) {
      state.user = {
        name: action.payload.data.name,
        email: action.payload.data.email,
        dailyCalories: action.payload.data.dailyCalories,
      };
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },

    [refresh.rejected](state) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    },
  },
});
