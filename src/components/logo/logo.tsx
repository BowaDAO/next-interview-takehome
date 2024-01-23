import { Typography } from "@mui/material";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <Typography
        component="h3"
        sx={{
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: 600,
          letterSpacing: "0.1px",
          color: "#252B42",
        }}
      >
        Bandage
      </Typography>
    </Link>
  );
};

export default Logo;
