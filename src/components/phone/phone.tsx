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

      <Typography variant="h6" color="common.white">
        (225) 555-0118
      </Typography>
    </Box>
  );
};

export default Phone;
