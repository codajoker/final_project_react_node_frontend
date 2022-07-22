import { createAsyncThunk } from '@reduxjs/toolkit';
import * as dailyRateApi from '../../services/dailyRateApi';
import { toast } from 'react-toastify';

export const fetchDailyRateAuthorized = createAsyncThunk(
  'user/dailyRate',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await dailyRateApi.fetchDailyRateAuthorized(userData);
      return data;
    } catch (error) {
      toast.error('Помилка серверу, спробуйте пізніше');
      return rejectWithValue(error.message);
    }
  }
);
