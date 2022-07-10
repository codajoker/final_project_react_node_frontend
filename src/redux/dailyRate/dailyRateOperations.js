import { createAsyncThunk } from '@reduxjs/toolkit';
import * as dailyRateApi from '../../services/dailyRateApi';

export const fethDailyRate = createAsyncThunk(
  'dailyRate',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await dailyRateApi.fetchDailyRate(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
