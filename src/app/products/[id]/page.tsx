"use client";

import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import { fetchProductById } from "@/redux-toolkit/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "@/redux-toolkit/store";
import { useEffect } from "react";
import { ProductPageHeader } from "@/containers";

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
    <Box>
      <ProductPageHeader product={product} />
    </Box>
  );
};

export default ProductPage;
