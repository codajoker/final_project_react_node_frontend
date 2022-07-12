import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  //   deleteProduct,
  //   getProductByQuery,
  //   getProductsListByDate,
} from './productsOperations';

const initialState = {
  meal: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [addProduct.fulfilled](state, action) {
      console.log(action.payload);
      state.meal.push(action.payload);
    },
  },
});
