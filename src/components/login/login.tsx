import { Button, Typography } from "@mui/material";
import { UserIcon } from "../icons/icons";

const Login = () => {
  return (
    <Button sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <UserIcon />

      <Typography
        variant="h6"
        color="secondary.dark"
        sx={{
          textTransform: "capitalize",
        }}
      >
        Login / Register
      </Typography>
    </Button>
  );
};

export default Login;
