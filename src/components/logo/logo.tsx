import { Typography } from "@mui/material";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <Typography variant="h2" color="text.primary">
        Bandage
      </Typography>
    </Link>
  );
};

export default Logo;
