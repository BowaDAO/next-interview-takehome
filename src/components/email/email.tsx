import { Box, Typography } from "@mui/material";
import { EmailIcon } from "../icons/icons";

const Email = () => {
  return (
    <Box display="flex" alignItems="center" gap="5px" padding="10px">
      <EmailIcon />

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
        michelle.rivera@example.com
      </Typography>
    </Box>
  );
};

export default Email;
