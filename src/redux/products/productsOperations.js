import { createAsyncThunk } from '@reduxjs/toolkit';
import * as productsApi from '../../services/productsApi';

export const addProduct = createAsyncThunk(
  'product/addDiaryFood',
  async (product, { rejectWithValue }) => {
    try {
      const addedProduct = await productsApi.addProduct(product);
      return addedProduct.data.foodData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProductsListByDate = createAsyncThunk(
  'users/dayinfo',
  async (date, { rejectWithValue }) => {
    try {
      const products = await productsApi.getProductsListByDate(date);
      return products;
    } catch (error) {
      if (error.response.status === 404) {
        return {
          data: {
            foodList: [],
          },
        };
      }
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/delDiaryFood',
  async ({ date, _id }, { rejectWithValue }) => {
    try {
      const deletedProduct = await productsApi.deleteProduct(date, _id);
      return deletedProduct.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
