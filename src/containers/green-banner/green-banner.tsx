import { Phone, Email, BannerSocials } from "@/components";
import { Box, Typography } from "@mui/material";

const GreenBanner = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "none",

        "@media(min-width: 1200px)": {
          display: "flex",
          height: "58px",
          paddingX: "24px",
          bgcolor: "secondary.main",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Phone />

        <Email />
      </Box>

      <Box padding={10}>
        <Typography variant="h6" color="common.white">
          Follow Us and get a chance to win 80% off
        </Typography>
      </Box>

      <BannerSocials />
    </Box>
  );
};

export default GreenBanner;
