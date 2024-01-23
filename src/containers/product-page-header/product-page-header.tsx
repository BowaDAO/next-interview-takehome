import {
  ArrowRightIcon,
  BlackEllipse,
  BlueEllipse,
  BrownEllipse,
  GreenEllipse,
  VisibilityIcon,
  WhiteCartIcon,
  WhiteHeartIcon,
} from "@/components/icons/icons";
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { addProductToCart } from "@/redux-toolkit/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "@/redux-toolkit/store";
import { addProductToWishlist } from "@/redux-toolkit/slices/wishlistSlice";
import { toast } from "react-toastify";

const ProductPageHeader = ({ product }: { product: ProductType }) => {
  const { cartItems } = useSelector((state: StateType) => state.cart);

  const { wishlistItems } = useSelector((state: StateType) => state.wisthlist);

  const dispatch: DispatchType = useDispatch();

  const existingCartItemsIds = cartItems.map((item) => item.id);

  const existingWishlistItemsIds = wishlistItems.map((item) => item.id);

  const productAlreadyInCart = existingCartItemsIds.includes(product.id);

  const productAlreadyInWishlist = existingWishlistItemsIds.includes(
    product.id
  );

  return (
    <Box
      sx={{
        paddingX: "11%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FAFAFA",
      }}
    >
      <Box sx={{ paddingY: "24px" }}>
        <Stack direction="row" spacing="10px" alignItems="center">
          <Typography
            variant="h6"
            color="#2523B42 "
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.2px",
            }}
          >
            Home
          </Typography>

          <ArrowRightIcon />

          <Typography
            variant="h6"
            color="#BDBDBD"
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.2px",
            }}
          >
            Shop
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "flex-start",
          paddingBottom: "48px",

          "@media (min-width: 768px)": {
            flexDirection: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "21px",
            width: "100%",

            "@media (min-width: 768px)": {
              width: "50%",
            },
          }}
        >
          <Box sx={{ position: "relative", height: "450px" }}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              quality={100}
              priority
              sizes="any"
            />
          </Box>

          <Stack direction="row" spacing="19px">
            {product.images.slice(0, 5).map((image, index) => {
              return (
                <Box
                  key={index.toString()}
                  sx={{
                    position: "relative",
                    height: "75px",
                    width: "100px",
                  }}
                >
                  <Image
                    src={image}
                    alt={`${product.title}-image-${index}`}
                    fill
                    quality={100}
                    sizes="any"
                    loading="lazy"
                  />
                </Box>
              );
            })}
          </Stack>
        </Box>

        <Box
          sx={{
            paddingX: "24px",
            paddingY: "11px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "450px",

            "@media (min-width: 768px)": {
              width: "50%",
            },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              color="#252B42"
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "30px",
                letterSpacing: "0.2px",
              }}
            >
              {product.title}
            </Typography>

            <Stack
              direction="row"
              spacing="5px"
              alignItems="center"
              marginTop="12px"
            >
              <Rating value={product.rating} size="small" />

              <Typography
                variant="h6"
                color="#737373"
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "0.2px",
                }}
              >
                10 Reviews
              </Typography>
            </Stack>

            <Stack direction="column" marginTop="22px">
              <Typography
                variant="h3"
                color="#252B42"
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "32px",
                  letterSpacing: "0.1px",
                }}
              >
                ${product.price}{" "}
              </Typography>

              <Stack
                direction="row"
                spacing="5px"
                alignItems="center"
                marginTop="5px"
              >
                <Typography
                  variant="h6"
                  color="#737373"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    letterSpacing: "0.2px",
                  }}
                >
                  Availability :
                </Typography>

                <Typography
                  variant="h6"
                  color="#23A6F0"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    letterSpacing: "0.2px",
                  }}
                >
                  Instock
                </Typography>
              </Stack>
            </Stack>

            <Typography variant="body1" marginTop="32px">
              {product.description}
            </Typography>
          </Box>

          <Box>
            <Divider />

            <Stack direction="row" spacing="10px" marginTop="29px">
              <BlueEllipse />

              <GreenEllipse />

              <BrownEllipse />

              <BlackEllipse />
            </Stack>

            <Stack marginTop="67px" direction="row" spacing="10px">
              <Button
                variant="contained"
                color="info"
                sx={{
                  width: "148px",
                  height: "44px",
                  fontSize: "14px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    textTransform: "capitalize",
                  }}
                >
                  Select Options
                </Typography>
              </Button>

              <Stack direction="row" spacing="10px" alignItems="center">
                <ButtonBase
                  onClick={() => {
                    dispatch(addProductToWishlist(product));
                    toast.success("Product added to wishlist.");
                  }}
                  disabled={productAlreadyInWishlist}
                  sx={{
                    height: "40px",
                    width: "40px",
                    padding: "10px",
                    borderRadius: "100%",
                    border: "1px solid #E8E8E8",
                  }}
                >
                  <WhiteHeartIcon />
                </ButtonBase>

                <ButtonBase
                  onClick={() => {
                    dispatch(addProductToCart({ ...product, quantity: 1 }));
                    toast.success("Product added to cart.");
                  }}
                  disabled={productAlreadyInCart}
                  sx={{
                    height: "40px",
                    width: "40px",
                    padding: "10px",
                    borderRadius: "100%",
                    border: "1px solid #E8E8E8",
                  }}
                >
                  <WhiteCartIcon />
                </ButtonBase>

                <ButtonBase
                  sx={{
                    height: "40px",
                    width: "40px",
                    padding: "10px",
                    borderRadius: "100%",
                    border: "1px solid #E8E8E8",
                  }}
                >
                  <VisibilityIcon />
                </ButtonBase>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPageHeader;
