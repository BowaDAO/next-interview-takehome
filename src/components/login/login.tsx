import { Button, Typography } from "@mui/material";
import { UserIcon } from "../icons/icons";

const Login = () => {
  return (
    <Button sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <UserIcon />

      <Typography
        component="p"
        sx={{
          fontSize: "14px",
          fontWeight: "700",
          lineHeight: "24px",
          letterSpacing: "0.2px",
          fontStyle: "normal",
          color: "#23A6F0",
          textTransform: "capitalize",
        }}
      >
        Login / Register
      </Typography>
    </Button>
  );
};

export default Login;
