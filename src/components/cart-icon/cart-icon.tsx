import {
  Button,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { BlueCartIcon } from "../icons/icons";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, StateType } from "@/redux-toolkit/store";
import { useState } from "react";
import CartItem from "../cart-item/cart-item";
import { useEffect } from "react";
import { calculateTotalCartItemsPrice } from "@/redux-toolkit/slices/cartSlice";

const CartIcon = () => {
  const { cartItems, totalCartItemsPrice, totalProductQuantity } = useSelector(
    (state: StateType) => state.cart
  );

  const [modalOpen, setModalOpen] = useState(false);

  const openCartPopup = () => setModalOpen(true);

  const closeCartPopup = () => setModalOpen(false);

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalCartItemsPrice(cartItems));
  }, [cartItems, totalProductQuantity, dispatch]);

  return (
    <>
      <Badge
        badgeContent={cartItems?.length > 0 && cartItems.length}
        color="default"
        sx={{
          color: "#23A6F0",
          width: "56px",
          height: "46px",
        }}
        overlap="circular"
      >
        <Button onClick={openCartPopup}>
          <BlueCartIcon />
        </Button>
      </Badge>

      <Dialog open={modalOpen}>
        <DialogTitle>Cart</DialogTitle>

        <DialogContent>
          {cartItems?.length < 1 ? (
            <Box>
              <Typography
                variant="h3"
                sx={{ fontSize: "16px", lineHeight: "32px" }}
              >
                Your cart is currently empty. Use the cart icon on a product
                page to add it to your cart.
              </Typography>
            </Box>
          ) : (
            <Box>
              <Stack direction="column" gap="20px">
                {cartItems?.map((item) => {
                  return <CartItem key={item.id} product={item} />;
                })}
              </Stack>
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          {cartItems?.length > 0 && (
            <Typography>Total Price: ${totalCartItemsPrice}</Typography>
          )}

          <Button onClick={closeCartPopup} color="info">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CartIcon;
