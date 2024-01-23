import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage } from "@/utilities/valuesFromLocalStorage";

type initialStateType = {
  wishlistItems: ProductType[];
};

const initialState: initialStateType = {
  wishlistItems: getDataFromLocalStorage("wishlistItems"),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProductToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload);
    },

    removeProductFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

type WishlistSlice = typeof wishlistSlice;

export const { addProductToWishlist, removeProductFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer as WishlistSlice["reducer"];
