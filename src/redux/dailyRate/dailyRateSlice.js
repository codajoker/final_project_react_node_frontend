import { createSlice } from '@reduxjs/toolkit';
import { fethDailyRate } from './dailyRateOperations';

const initialState = {
  dailyCalories: null,
  uniqCategories: [],
  error: null,
};

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: {
    [fethDailyRate.fulfilled]: (state, { payload }) => {
      state.dailyCalories = payload.data.dailyCalories;
      state.uniqCategories = payload.data.uniqCategories;
    },
    [fethDailyRate.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export default dailyRateSlice.reducer;
