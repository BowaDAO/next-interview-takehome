import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ProductPageBody = ({ product }: { product: ProductType }) => {
  return (
    <Box
      sx={{
        paddingX: "11%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        direction="row"
        alignSelf="center"
        paddingY="34px"
        sx={{
          gap: "24px",

          "@media (min-width: 768px)": {
            gap: "48px",
          },
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Description
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Additional Information
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Review(0)
        </Typography>
      </Stack>

      <Divider />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingY: "48px",
          gap: "48px",

          "@media (min-width: 768px)": {
            flexDirection: "row",
            justifyContent: "space-between",
          },
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>

        <Box
          sx={{
            width: "413px",
            height: "372px",
            position: "relative",
            maxWidth: "100%",
          }}
        >
          <Image
            src={product.images[2]}
            alt={product.title}
            fill
            quality={100}
            priority
            sizes="any"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPageBody;
