import {createSlice} from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: {  },
      token: null,
      logIn: false,
      isFetchingCurrentUser: false,
    },
  
    extraReducers: {
    
     
    },
  });