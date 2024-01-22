import { Box, Typography } from "@mui/material";
import {
  InstagramWhiteIcon,
  YoutubeWhiteIcon,
  FacebookWhiteIcon,
  TwitterWhiteIcon,
} from "../icons/icons";

const BannerSocials = () => {
  return (
    <Box
      component="div"
      display="flex"
      alignItems="center"
      gap="10px"
      padding="10px"
    >
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
        Follow Us :
      </Typography>

      <InstagramWhiteIcon />

      <YoutubeWhiteIcon />

      <FacebookWhiteIcon />

      <TwitterWhiteIcon />
    </Box>
  );
};

export default BannerSocials;
