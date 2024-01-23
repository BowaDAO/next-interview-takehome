"use client";

import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { fetchProductById } from "@/redux-toolkit/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "@/redux-toolkit/store";
import { useEffect } from "react";
import {
  ProductPageHeader,
  ProductPageBody,
  FeaturedProducts,
} from "@/containers";
import { PartnerCompanies } from "@/components";

const ProductPage = () => {
  const { id } = useParams();

  const dispatch: DispatchType = useDispatch();

  const { status, error, product } = useSelector(
    (state: StateType) => state.product
  );

  useEffect(() => {
    dispatch(fetchProductById({ productId: id }));
  }, [dispatch]);

  return (
    <>
      {status.fetchProductByIdStatus === "loading" ? (
        <Box sx={{ minHeight: "100vh" }}></Box>
      ) : status.fetchProductByIdStatus === "failed" ? (
        <Box>
          <Typography>{error}</Typography>
        </Box>
      ) : (
        <>
          {product && (
            <Box>
              <ProductPageHeader product={product} />

              <ProductPageBody product={product} />

              <FeaturedProducts />

              <PartnerCompanies />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default ProductPage;
