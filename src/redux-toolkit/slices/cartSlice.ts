import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage } from "@/utilities/valuesFromLocalStorage";

type initialStateType = {
  cartItems: ProductType[];
  totalCartItemsPrice: number;
  totalProductQuantity: number;
};

const initialState: initialStateType = {
  cartItems: getDataFromLocalStorage("cartItems"),
  totalCartItemsPrice: 0,
  totalProductQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },

    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state, action) => {
      state.cartItems = [];
    },

    incrementProductCount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem) cartItem.quantity = cartItem.quantity + 1;
    },

    decrementProductCount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem) cartItem.quantity = cartItem.quantity - 1;
    },

    calculateTotalCartItemsPrice: (state, action) => {
      let eachProductTotalPrice = 0;

      let eachProductQuantity = 0;

      state.cartItems.forEach((cartItem) => {
        eachProductQuantity += cartItem.quantity;

        eachProductTotalPrice += cartItem.quantity * cartItem.price;
      });

      state.totalProductQuantity = eachProductQuantity;

      state.totalCartItemsPrice = eachProductTotalPrice;
    },
  },
});

type CartSlice = typeof cartSlice;

export const {
  addProductToCart,
  removeProductFromCart,
  clearCart,
  incrementProductCount,
  decrementProductCount,
  calculateTotalCartItemsPrice,
} = cartSlice.actions;

export default cartSlice.reducer as CartSlice["reducer"];
