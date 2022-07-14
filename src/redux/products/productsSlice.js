import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  deleteProduct,
  getProductsListByDate,
} from './productsOperations';

const initialState = {
  meal: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [addProduct.fulfilled](state, action) {
      state.meal.unshift(action.payload);
    },
    [getProductsListByDate.fulfilled](state, action) {
      if (!action.payload?.data?.foodList) {
        state.meal = [];
      } else { state.meal = action.payload.data.foodList;}
      
    },
    [deleteProduct.fulfilled](state, action) {
      state.meal.filter(product => product._id !== action.payload._id);
    },
  },
});
