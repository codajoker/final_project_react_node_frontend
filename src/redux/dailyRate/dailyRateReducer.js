import { createSlice } from '@reduxjs/toolkit';
import { fethDailyRate } from './dailyRateOperations';

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState: {
    dailyCalories: null,
    uniqCategories: [],
  },
  extraReducers: {
    [fethDailyRate.fulfilled]: (state, action) => {
      state.dailyCalories = action.payload.data.dailyCalories;
      state.uniqCategories = action.payload.data.uniqCategories;
    },
  },
});

export default dailyRateSlice.reducer;
