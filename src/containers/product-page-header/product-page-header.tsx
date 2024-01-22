import {
  BlackEllipse,
  BlueEllipse,
  BrownEllipse,
  GreenEllipse,
} from "@/components/icons/icons";
import { Box, Button, Divider, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ProductPageHeader = ({ product }: { product: ProductType | null }) => {
  return (
    <>
      {product && (
        <Box
          sx={{
            paddingX: "11%",
            display: "flex",
            flexDirection: "row",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "21px",
              width: "50%",
            }}
          >
            <Box sx={{ position: "relative", height: "450px" }}>
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                quality={100}
                priority
                sizes="any"
                loading="eager"
              />
            </Box>

            <Stack direction="row" spacing="19px">
              {product.images.slice(1, 6).map((image, index) => {
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

          <Box>
            <Box>
              <Typography variant="h4">{product.title}</Typography>

              <Stack direction="row" spacing="2px" alignItems="center">
                <Rating value={product.rating} size="small" />

                <Typography variant="h6">10 Reviews</Typography>
              </Stack>

              <Stack>
                <Typography variant="h2">${product.price} </Typography>

                <Stack direction="row" spacing="2px" alignItems="center">
                  <Typography variant="h6">Availability :</Typography>

                  <Typography variant="h6">Instock</Typography>
                </Stack>
              </Stack>
            </Box>

            <Box>
              <Divider />

              <Stack direction="row" spacing="10px">
                <BlueEllipse />

                <GreenEllipse />

                <BrownEllipse />

                <BlackEllipse />
              </Stack>

              <Stack>
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
                    }}
                  >
                    Select Options
                  </Typography>
                </Button>

                <Stack></Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductPageHeader;
