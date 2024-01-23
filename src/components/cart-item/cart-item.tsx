import { DispatchType } from "@/redux-toolkit/store";
import { Box, Button, Typography, Stack } from "@mui/material";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  decrementProductCount,
  incrementProductCount,
  removeProductFromCart,
} from "@/redux-toolkit/slices/cartSlice";

const CartItem = ({ product }: { product: ProductType }) => {
  const dispatch: DispatchType = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid #ECECEC",
        borderBottom: " 1px solid #ECECEC",
        padding: "10px",
        gap: "50px",
      }}
    >
      <Stack direction="row" spacing="5px" alignItems="center">
        <Box sx={{ position: "relative", height: "120px", width: "120px" }}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            quality={100}
            sizes="any"
          />
        </Box>

        <Stack>
          <Typography>{product.title}</Typography>

          <Typography>${product.price}</Typography>
        </Stack>
      </Stack>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Button
          size="small"
          color="error"
          onClick={() => dispatch(removeProductFromCart(product.id))}
        >
          Remove
        </Button>

        <Stack direction="row" spacing="1px" alignItems="center">
          <Button
            disabled={product.quantity === 1}
            onClick={() => dispatch(decrementProductCount(product.id))}
          >
            -
          </Button>

          <Typography>{product.quantity} </Typography>

          <Button onClick={() => dispatch(incrementProductCount(product.id))}>
            +
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default CartItem;
