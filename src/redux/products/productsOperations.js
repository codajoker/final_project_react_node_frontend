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
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/delDiaryFood',
  async (id, { rejectWithValue }) => {
    try {
      const deletedProduct = await productsApi.deleteProduct(id);
      return deletedProduct;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
