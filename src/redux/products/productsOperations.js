import { createAsyncThunk } from '@reduxjs/toolkit';
import * as productsApi from '../../services/productsApi';
// import { toast } from 'react-toastify';

export const addProduct = createAsyncThunk(
  'product/addDiaryFood',
  async (product, { rejectWithValue }) => {
    try {
      await productsApi.addProduct(product);
      return product;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProductsList = createAsyncThunk(
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
  'product/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      await productsApi.deleteProduct(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
