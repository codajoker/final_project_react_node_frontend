import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  deleteProduct,
  getProductsListByDate,
} from './productsOperations';

const initialState = {
  meal: [],
  isLoading: false,
  totalDayCalories: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [addProduct.fulfilled](state, action) {
      state.meal.unshift(action.payload);
      state.isLoading = false;
      state.totalDayCalories =
        state.totalDayCalories + action.payload.calories_kcal;
    },
    [getProductsListByDate.fulfilled](state, action) {
      state.meal = action.payload.data.foodList;
      state.isLoading = false;
      state.totalDayCalories = action.payload.data.totalDayCalories;
    },
    [deleteProduct.fulfilled](state, action) {
      state.meal = state.meal.filter(
        product => product._id !== action.payload.data.delletedProduct._id
      );
      state.totalDayCalories =
        state.totalDayCalories -
        action.payload.data.delletedProduct.calories_kcal;
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
