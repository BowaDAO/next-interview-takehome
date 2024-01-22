import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type initialStateType = {
  products: ProductType[];
  status: {
    fetchAllProductsStatus: "idle" | "loading" | "success" | "failed";
    fetchProductByIdStatus: "idle" | "loading" | "success" | "failed";
  };
  error: string | null;
  product: ProductType | null;
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

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (
    { productId }: { productId: string | string[] },
    { rejectWithValue }
  ) => {
    return axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        return res.data;
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
  status: {
    fetchAllProductsStatus: "idle",
    fetchProductByIdStatus: "idle",
  },
  error: "null",
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.pending, (state, action) => {
        state.status.fetchAllProductsStatus = "loading";
      })
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.status.fetchAllProductsStatus = "success";
        state.products = action.payload;
      })
      .addCase(fetchProductsList.rejected, (state, action) => {
        state.status.fetchAllProductsStatus = "failed";
        state.error = action.payload as string;
      })
      .addCase(fetchProductById.pending, (state, action) => {
        state.status.fetchProductByIdStatus = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status.fetchProductByIdStatus = "success";
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status.fetchProductByIdStatus = "failed";
        state.error = action.payload as string;
      });
  },
});

type ProductSlice = typeof productSlice;

export default productSlice.reducer as ProductSlice["reducer"];
