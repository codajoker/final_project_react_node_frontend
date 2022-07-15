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
      const existingProduct = state.meal.find(
        x => x._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.weight_g = action.payload.weight_g;
        existingProduct.calories_kcal = action.payload.calories_kcal;
      } else {
        state.meal.unshift(action.payload);
      }
      state.isLoading = false;
    },
    [getProductsListByDate.fulfilled](state, action) {
      state.meal = action.payload.data.foodList;
      state.isLoading = false;
    },
    [deleteProduct.fulfilled](state, action) {
      state.meal = state.meal.filter(
        product => product._id !== action.payload.data.delletedProduct._id
      );
      state.isLoading = false;
    },

    [addProduct.pending](state) {
      state.isLoading = true;
    },
    [getProductsListByDate.pending](state) {
      state.isLoading = true;
    },
    [deleteProduct.pending](state) {
      state.isLoading = true;
    },
    [addProduct.rejected](state) {
      state.isLoading = false;
    },
    [getProductsListByDate.rejected](state) {
      state.isLoading = false;
    },
    [deleteProduct.rejected](state) {
      state.isLoading = false;
    },
  },
});
