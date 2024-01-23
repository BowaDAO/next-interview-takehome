import { Box } from "@mui/material";
import { SectionHeading, ServiceCard } from "@/components";
import {
  ConcreteVector,
  EasyWinVector,
  HackGrowthVector,
} from "@/components/icons/icons";

const FeaturedServices = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingY: "80px",
        paddingX: "11%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      <SectionHeading
        h3="THE BEST SERVICES"
        h2="Featured Products"
        text="Problems trying to resolve the conflict between "
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",

          "@media (min-width:1024px)": {
            flexDirection: "row",
          },
        }}
      >
        <ServiceCard
          icon={<EasyWinVector />}
          heading="Easy Wins"
          subheading="Get your best looking smile now!"
        />

        <ServiceCard
          icon={<ConcreteVector />}
          heading="Concrete"
          subheading="Defalcate is most focused in helping you discover your most beautiful smile"
        />

        <ServiceCard
          icon={<HackGrowthVector />}
          heading="Hack Growth"
          subheading="Overcame any hurdle or any other problem."
        />
      </Box>
    </Box>
  );
};

export default FeaturedServices;
