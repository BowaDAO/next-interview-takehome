"use client";

import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { fetchProductById } from "@/redux-toolkit/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "@/redux-toolkit/store";
import { useEffect } from "react";
import { ProductPageHeader, ProductPageBody } from "@/containers";

const ProductPage = () => {
  const { id } = useParams();

  const dispatch: DispatchType = useDispatch();

  const { status, error, product } = useSelector(
    (state: StateType) => state.product
  );

  const { cartItems } = useSelector((state: StateType) => state.cart);

  const { wishlistItems } = useSelector((state: StateType) => state.wisthlist);

  useEffect(() => {
    dispatch(fetchProductById({ productId: id }));
  }, [dispatch, id]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [cartItems, wishlistItems]);

  return (
    <>
      {status.fetchProductById === "loading" ? (
        <Box sx={{ minHeight: "100vh", textAlign: "center" }}>
          <Typography>Loading...</Typography>
        </Box>
      ) : status.fetchProductById === "failed" ? (
        <Box textAlign="center">
          {error && <Typography variant="body2">{error}</Typography>}
        </Box>
      ) : (
        <>
          {product && (
            <Box>
              <ProductPageHeader product={product} />

              <ProductPageBody product={product} />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default ProductPage;
