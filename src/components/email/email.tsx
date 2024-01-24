import { Box, Typography } from "@mui/material";
import { EmailIcon } from "../icons/icons";

const Email = () => {
  return (
    <Box display="flex" alignItems="center" gap="5px" padding="10px">
      <EmailIcon />

      <Typography variant="h6" color="common.white">
        michelle.rivera@example.com
      </Typography>
    </Box>
  );
};

export default Email;
