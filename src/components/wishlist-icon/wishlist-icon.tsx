import {
  Box,
  Button,
  Typography,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, StateType } from "@/redux-toolkit/store";
import { BlueWishlistIcon } from "../icons/icons";
import { useState } from "react";
import Image from "next/image";
import { removeProductFromWishlist } from "@/redux-toolkit/slices/wishlistSlice";

const WishlistIcon = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openWishlistPopup = () => setModalOpen(true);

  const closeWishlistPopup = () => setModalOpen(false);

  const { wishlistItems } = useSelector((state: StateType) => state.wisthlist);

  const dispatch: DispatchType = useDispatch();

  return (
    <>
      <Badge
        badgeContent={wishlistItems?.length > 0 && wishlistItems.length}
        color="default"
        style={{
          color: "#23A6F0",
          width: "56px",
          height: "46px",
        }}
        overlap="circular"
      >
        <Button onClick={openWishlistPopup}>
          <BlueWishlistIcon />
        </Button>
      </Badge>

      <Dialog open={modalOpen}>
        <DialogTitle>Wishlists</DialogTitle>

        <DialogContent sx={{ width: "500px", maxWidth: "100%" }}>
          {wishlistItems?.length < 1 ? (
            <Box>
              <Typography>
                Your wishlist is currently empty. Use the heart icon in a
                product page to add it to your wishlist.
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {wishlistItems?.map((product) => {
                return (
                  <Stack
                    key={product.id}
                    direction="row"
                    spacing="100px"
                    alignItems="center"
                    borderTop="1px solid #ECECEC"
                    borderBottom=" 1px solid #ECECEC"
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "120px",
                        width: "120px",
                      }}
                    >
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        quality={100}
                        sizes="any"
                      />
                    </Box>

                    <Stack
                      direction="column"
                      spacing="5px"
                      alignItems="flex-start"
                    >
                      <Typography>{product.title}</Typography>

                      <Button
                        size="small"
                        color="error"
                        onClick={() =>
                          dispatch(removeProductFromWishlist(product.id))
                        }
                      >
                        Remove
                      </Button>
                    </Stack>
                  </Stack>
                );
              })}
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={closeWishlistPopup} color="info">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WishlistIcon;
