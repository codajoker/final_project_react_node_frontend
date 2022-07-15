import { createSlice } from '@reduxjs/toolkit';
import { fetchDailyRateAuthorized } from './dailyRateOperations';
import { refreshUser } from '../auth/authOperations';


const initialState = {
  dailyCalories: null,
  uniqCategories: [],
  error: null,
};

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: {
    [fetchDailyRateAuthorized.pending]: state => {
      state.dailyCalories = null;
      state.uniqCategories = [];
    },
    [fetchDailyRateAuthorized.fulfilled]: (state, { payload }) => {
      state.dailyCalories = payload.data.dailyCalories;
      state.uniqCategories = payload.data.uniqCategories;
    },
    [fetchDailyRateAuthorized.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      state.dailyCalories = payload.data.dailyCalories;
      state.uniqCategories = payload.data.notAllowedFood;
    },
  
  },
});

export default dailyRateSlice.reducer;
