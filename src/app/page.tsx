import { Box } from "@mui/material";

import { GreenBanner, NavigationBar, Header } from "@/containers";

export default function Home() {
  return (
    <Box>
      <GreenBanner />

      <NavigationBar />

      <Header />
    </Box>
  );
}
