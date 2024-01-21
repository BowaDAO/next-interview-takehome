import {
  Logo,
  Navlinks,
  Login,
  SearchIcon,
  CartIcon,
  WishlistIcon,
} from "@/components";
import { AppBar, Toolbar, Box, Typography, Stack } from "@mui/material";

const NavigationBar = () => {
  return (
    <AppBar position="static" elevation={0} style={{ backgroundColor: "#FFF" }}>
      <Toolbar
        sx={{
          display: "none",

          "@media (min-width: 1024px)": {
            alignItems: "center",
            justifyContent: "space-between",
            height: "58px",
            marginY: "15px",
            display: "flex",
            paddingX: "38px",
          },
        }}
      >
        <Box component="div" display="flex" alignItems="center" gap="10px">
          <Typography
            component="span"
            sx={{ paddingY: "13px", paddingRight: "79px" }}
          >
            <Logo />
          </Typography>

          <Navlinks />
        </Box>

        <Stack direction="row">
          <Login />

          <Stack direction="row">
            <SearchIcon />

            <CartIcon />

            <WishlistIcon />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
