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
      <Typography variant="h6" color="common.white">
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
