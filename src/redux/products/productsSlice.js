import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  changeProduct,
  deleteProduct,
  getProductsListByDate,
} from './productsOperations';

const initialState = {
  productsList: [],
  isLoading: false,
  date: null,
  mobileAddSelected: false,
  meal: 'breakfast',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setMobileAddSelected(state, action) {
      state.mobileAddSelected = action.payload;
    },
    setMeal(state, action) {
      state.meal = action.payload;
    },
  },
  extraReducers: {
    [addProduct.fulfilled](state, action) {
      const existingProduct = state.productsList.find(
        x => x._id === action.payload._id && x.meal === action.payload.meal
      );
      if (existingProduct) {
        existingProduct.weight_g = action.payload.weight_g;
        existingProduct.calories_kcal = action.payload.calories_kcal;
      } else {
        state.productsList.unshift(action.payload);
      }
      state.isLoading = false;
    },
    [changeProduct.fulfilled](state, action) {
      console.log(action.payload);
      const index = state.productsList.findIndex(
        product => product._id === action.payload.foodData._id && product.meal === action.payload.foodData.meal
      );
      state.productsList[index].weight_g = action.payload.foodData.weight_g;
      state.productsList[index].calories_kcal =
        action.payload.foodData.calories_kcal;
      state.isLoading = false;
    },
    [getProductsListByDate.fulfilled](state, action) {
      state.productsList = action.payload.foodList;
      state.isLoading = false;
    },
    [deleteProduct.fulfilled](state, action) {
      state.productsList = state.productsList.filter(
        product => product._id !== action.payload._id || product.meal !== action.payload.meal
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
    [changeProduct.pending](state) {
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
    [changeProduct.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const { setDate, setMobileAddSelected, setMeal } = productsSlice.actions;
