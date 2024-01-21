import { Phone, Email, BannerSocials } from "@/components";
import { Box, Typography } from "@mui/material";

const GreenBanner = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "none",

        "@media (min-width: 1200px)": {
          display: "flex",
          height: "58px",
          paddingX: "24px",
          bgcolor: "#23856D",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
    >
      <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
        <Phone />

        <Email />
      </Box>

      <Box component="span" padding={10}>
        <Typography
          component="h6"
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "0.2px",
            fontStyle: "normal",
            color: "#FFF",
          }}
        >
          Follow Us and get a chance to win 80% off
        </Typography>
      </Box>

      <BannerSocials />
    </Box>
  );
};

export default GreenBanner;
