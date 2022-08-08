import { createAsyncThunk } from '@reduxjs/toolkit';
import * as dailyRateApi from '../../services/dailyRateApi';

export const fetchDailyRateAuthorized = createAsyncThunk(
  'user/dailyRate',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await dailyRateApi.fetchDailyRateAuthorized(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
