import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    wisthlist: wishlistSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type StateType = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
