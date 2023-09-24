
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import publicationReducer, { publicationApi } from './slices/publicationSlice';

const store = configureStore({
  reducer: {
    publication: publicationReducer,
    [publicationApi.reducerPath]: publicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(publicationApi.middleware),
});

setupListeners(store.dispatch);

export default store;
