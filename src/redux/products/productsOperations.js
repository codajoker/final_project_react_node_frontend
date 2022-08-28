import { createAsyncThunk } from '@reduxjs/toolkit';
import * as productsApi from '../../services/productsApi';

export const addProduct = createAsyncThunk(
  'product/addDiaryFood',
  async (product, { rejectWithValue , getState}) => {
    try {
      const state = getState();
      const date = state.products.date;
      const addedProduct = await productsApi.addProduct({diary_day: date, product });
      return addedProduct.foodData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeProduct = createAsyncThunk(
  'product/changeProduct',
  async ({ product }, { rejectWithValue, getState } ) => {
    try {
      const state = getState();
      const date = state.products.date;
      const changedProduct = await productsApi.changeProduct(date, product);
      return changedProduct;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProductsListByDate = createAsyncThunk(
  'users/dayinfo',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const date = state.products.date
      const products = await productsApi.getProductsListByDate(date);
      return products;
    } catch (error) {
      if (error.response.status === 404) {
        return {
            foodList: [],
        };
      }
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteDiaryFood',
  async ({ _id, meal }, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const date = state.products.date
      const deletedProduct = await productsApi.deleteProduct(date, _id, meal);
      return deletedProduct;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

