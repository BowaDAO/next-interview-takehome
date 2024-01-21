import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Box>
      <Box
        sx={{
          height: "238px",
          position: "relative",
          display: "block",
        }}
      >
        <Image
          src={product.images[0]}
          alt={product.title}
          quality={100}
          fill
          loading="lazy"
          sizes="any"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          padding: "25px",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          variant="h5"
          color="#252B42"
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0.1px",
            textAlign: "center",
          }}
        >
          {product.title.substring(0, 15)}
        </Typography>

        <Typography
          variant="body2"
          color="#737373"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0.2px",
            textAlign: "center",
          }}
        >
          {product.category}
        </Typography>

        <Stack direction="row" spacing="5px">
          <Typography
            variant="h5"
            color="#BDBDBD"
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.1px",
            }}
          >
            ${product.price}
          </Typography>

          <Typography
            variant="h5"
            color="#23856D"
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.1px",
            }}
          >
            ${product.discountPercentage}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
