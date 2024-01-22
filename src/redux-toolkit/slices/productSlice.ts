import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type initialStateType = {
  products: ProductType[];
  status: "idle" | "loading" | "success" | "failed";
  error: string | null;
};

type Query = {
  page: number;
  limit: number;
};

export const fetchProductsList = createAsyncThunk(
  "product/fetchProductsList",
  async ({ page, limit }: Query, { rejectWithValue }) => {
    return axios
      .get(`https://dummyjson.com/products?limit=${limit * page}`) //dummyJson has no page implementation in its setup hence I did this. Page should have been a directly query parameter which allows us to persist previousPageData instead of reloading the entire data.
      .then((res) => {
        return res.data.products;
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          const errorResponse: ErrorResponse = error.response.data;

          return rejectWithValue(
            errorResponse.message || "Something went wrong, please try again"
          );
        } else {
          return rejectWithValue("Something went wrong, please try again");
        }
      });
  }
);

const initialState: initialStateType = {
  products: [],
  status: "idle",
  error: "null",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchProductsList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

type ProductSlice = typeof productSlice;

export default productSlice.reducer as ProductSlice["reducer"];
