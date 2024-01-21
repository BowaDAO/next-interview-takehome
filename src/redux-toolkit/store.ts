import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
