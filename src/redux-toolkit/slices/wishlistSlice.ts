import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage } from "@/utilities/valuesFromLocalStorage";

type initialStateType = {
  wishlistItems: ProductType[];
};

const wishlistItemsFromStorage = getDataFromLocalStorage("wishlistItems");

const initialState: initialStateType = {
  wishlistItems: wishlistItemsFromStorage,
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
