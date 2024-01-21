import { Box } from "@mui/material";
import { SectionHeading } from "@/components";

const FeaturedServices = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingY: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SectionHeading
        h3="THE BEST SERVICES"
        h2="Featured Products"
        text="Problems trying to resolve the conflict between "
      />
    </Box>
  );
};

export default FeaturedServices;
