import { Typography, Box } from "@mui/material";
import { PhoneIcon } from "../icons/icons";

const Phone = () => {
  return (
    <Box
      component="div"
      display="flex"
      alignItems="center"
      gap="5px"
      padding="10px"
    >
      <PhoneIcon />

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
        (225) 555-0118
      </Typography>
    </Box>
  );
};

export default Phone;
