import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "../features/ProductSlice";

// Adding the api middleware enables caching, invalidation, polling,
// and other useful features of `rtk-query`

export const store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
});


/*
 1. [studentApi.reducerPath]: studentApi.reducer" : In RTK query , we donot have to create reducers  manually in slices , it is generated automatically and use in stor like this : its dynamic key and value . Similarly we , can attach multiple reducers as doing in ReduxToolKit.

  2. middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),

  => this middleware is optional to write , but keep for safe side . This simply concat all slices in store.
*/ 