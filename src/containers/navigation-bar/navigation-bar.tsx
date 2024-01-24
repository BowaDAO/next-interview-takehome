import {
  Logo,
  Navlinks,
  Login,
  SearchIcon,
  CartIcon,
  WishlistIcon,
} from "@/components";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Drawer,
  Button,
  IconButton,
} from "@mui/material";
import { useState } from "react";

const NavigationBar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => setDrawerIsOpen(true);

  const closeDrawer = () => setDrawerIsOpen(false);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "common.white" }}
      >
        {/* PC Navbar */}

        <Toolbar
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            height: "58px",
            marginY: "15px",
            display: "none",
            paddingX: "38px",

            "@media (min-width: 1024px)": {
              display: "flex",
            },
          }}
        >
          <Box component="div" display="flex" alignItems="center" gap="10px">
            <Box sx={{ paddingY: "13px", paddingRight: "79px" }}>
              <Logo />
            </Box>

            <Navlinks flexDirection="row" />
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

        {/* Mobile Navbar */}

        <Toolbar
          sx={{
            display: "flex",
            height: "58px",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",

            "@media (min-width: 1024px)": {
              display: "none",
            },
          }}
        >
          <Logo />

          <Button variant="outlined" color="info" onClick={openDrawer}>
            Open
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}

      <Drawer variant="persistent" anchor="top" open={drawerIsOpen}>
        <Box alignSelf="flex-end" padding="5px">
          <IconButton onClick={closeDrawer}>Close</IconButton>
        </Box>

        <Box paddingBottom="24px">
          <Navlinks flexDirection="column" />

          <Stack alignItems="center">
            <SearchIcon />

            <CartIcon />

            <WishlistIcon />
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default NavigationBar;
