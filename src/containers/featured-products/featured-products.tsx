import { SectionHeading, ProductCard } from "@/components";
import {
  Box,
  Grid,
  Skeleton,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, StateType } from "@/redux-toolkit/store";
import { useEffect, useState } from "react";
import { fetchProductsList } from "@/redux-toolkit/slices/productSlice";
import { usePathname } from "next/navigation";

const FeaturedProducts = () => {
  const [page, setPage] = useState<number>(1);

  const dispatch: DispatchType = useDispatch();

  const pathname = usePathname();

  const { products, status, error, product } = useSelector(
    (state: StateType) => state.product
  );

  useEffect(() => {
    dispatch(fetchProductsList({ page, limit: 10 }));
  }, [page, dispatch]);

  const thisIsProductRoute = Boolean(pathname === `/products/${product?.id}`);

  return (
    <Box
      sx={{
        paddingY: "80px",
        paddingX: "11%",
        display: "flex",
        flexDirection: "column",
        alignItems: thisIsProductRoute ? "flex-start" : "center",
        justifyContent: "center",
        gap: "32px",
        backgroundColor: thisIsProductRoute ? "#FAFAFA" : "#FFF",
      }}
    >
      <>
        {thisIsProductRoute ? (
          <SectionHeading h3="BESTSELLER PRODUCTS" />
        ) : (
          <SectionHeading
            h3="BESTSELLER PRODUCTS"
            h2="Featured Products "
            text="Problems trying to resolve the conflict between "
          />
        )}
      </>

      {thisIsProductRoute && (
        <Divider
          sx={{
            color: "#ECECEC",
            minWidth: "100%",
          }}
        />
      )}

      <Box sx={{ margin: "24px" }}>
        {status.fetchAllProductsStatus === "loading" ? (
          <Grid container spacing="30px">
            {[...Array(10 * page)].map((_, index) => {
              return (
                <Grid item key={index} xs={12} sm={6} md={4} lg={12 / 5}>
                  <Skeleton variant="rectangular" width={183} height={400} />
                </Grid>
              );
            })}
          </Grid>
        ) : status.fetchAllProductsStatus === "success" ? (
          <Grid container spacing="30px">
            {products?.map((product: ProductType) => {
              return (
                <Grid
                  item
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={thisIsProductRoute ? 3 : 12 / 5}
                >
                  <ProductCard product={product} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Box></Box>
        )}
      </Box>

      <>
        {!thisIsProductRoute &&
          products?.length > 0 &&
          products?.length < 30 && (
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
      </>
    </Box>
  );
};

export default FeaturedProducts;
