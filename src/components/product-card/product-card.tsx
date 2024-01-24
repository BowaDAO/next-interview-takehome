import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: ProductType }) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/products/${product.id}`)}>
      <Box
        sx={{
          height: "238px",
          position: "relative",
          display: "block",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <Image
          src={product.thumbnail}
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
          color="text.primary"
          sx={{
            textAlign: "center",
          }}
        >
          {product.title.substring(0, 15)}
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            textAlign: "center",
          }}
        >
          {product.category}
        </Typography>

        <Stack direction="row" spacing="5px">
          <Typography variant="h5" color="primary.light">
            ${product.price}
          </Typography>

          <Typography variant="h5" color="secondary.main">
            ${product.discountPercentage}
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default ProductCard;
