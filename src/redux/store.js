import { configureStore } from '@reduxjs/toolkit';
import {  authSlice } from './redux-redesers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const persistConfigAuth = {
  key: 'auth',
  storage,
  whitlist: ['token'],
};
const persistedReducerAuth = persistReducer(
  persistConfigAuth,
authSlice.reducer,  );
export const store = configureStore({
  reducer: {
    auth: persistedReducerAuth,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);