import { SectionHeading, ProductCard } from "@/components";
import { Box, Grid, Skeleton, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, StateType } from "@/redux-toolkit/store";
import { useEffect, useState } from "react";
import { fetchProductsList } from "@/redux-toolkit/slices/productSlice";

const FeaturedProducts = () => {
  const [page, setPage] = useState<number>(1);

  const dispatch: DispatchType = useDispatch();

  const { products, status, error } = useSelector(
    (state: StateType) => state.product
  );

  console.log(products, page);

  useEffect(() => {
    dispatch(fetchProductsList({ page, limit: 10 }));
  }, [page, dispatch]);

  return (
    <Box
      sx={{
        paddingY: "80px",
        paddingX: "11%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      <SectionHeading
        h3="BESTSELLER PRODUCTS"
        h2="Featured Products "
        text="Problems trying to resolve the conflict between "
      />

      <Box sx={{ margin: "24px" }}>
        {status === "loading" ? (
          <Grid container spacing="30px">
            {[...Array(10 * page)].map((_, index) => {
              return (
                <Grid item key={index} xs={12} sm={6} md={4} lg={12 / 5}>
                  <Box>
                    <Skeleton variant="rectangular" width={183} height={400} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        ) : status === "success" ? (
          <Grid container spacing="30px">
            {products.map((product) => {
              return (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={12 / 5}>
                  <Box>
                    <ProductCard product={product} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Box></Box>
        )}
      </Box>

      {products.length < 30 && (
        <Button
          variant="outlined"
          color="info"
          sx={{ paddingX: "40px", paddingY: "15px" }}
          onClick={() => setPage((page) => (page > 3 ? 0 : page + 1))}
        >
          <Typography
            color="#23A6F0"
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "22px",
              letterSpacing: "0.2px",
            }}
          >
            LOAD MORE PRODUCTS
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default FeaturedProducts;
