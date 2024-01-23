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
        <Typography
          variant="body1"
          color="#737373"
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "0.2px",
          }}
        >
          Description
        </Typography>

        <Typography
          variant="body1"
          color="#737373"
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "0.2px",
          }}
        >
          Additional Information
        </Typography>

        <Typography
          variant="body1"
          color="#737373"
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "0.2px",
          }}
        >
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
        <Typography
          variant="body2"
          color="#737373"
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0.2px",
          }}
        >
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
