import { Box, Typography, Stack } from "@mui/material";
import { footerLinks } from "@/constants/data";
import { Logo, SubscribeInputField } from "@/components";
import {
  FacebookBlueIcon,
  InstagramBlueIcon,
  TwitterBlueIcon,
} from "@/components/icons/icons";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const thisIsHomeRoute = Boolean(pathname === "/");

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          paddingX: "11%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          width: "100%",
          paddingY: "40px",
          backgroundColor: thisIsHomeRoute ? "#FAFAFA" : "#FFF",

          "@media (min-width: 1024px)": {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 0,
          },
        }}
      >
        <Logo />

        <Stack direction="row" spacing="20px">
          <FacebookBlueIcon />

          <InstagramBlueIcon />

          <TwitterBlueIcon />
        </Stack>
      </Box>

      <Box
        sx={{
          marginY: "50px",
          paddingX: "11%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          gap: "30px",

          "@media (min-width: 1024px)": {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 0,
          },
        }}
      >
        {footerLinks.map((item, index) => {
          const { sublinks, heading } = item;

          return (
            <Box
              key={index.toString()}
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Typography
                variant="h5"
                color="#252B42"
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "0.1px",
                }}
              >
                {heading}
              </Typography>

              <Stack direction="column" gap="10px">
                {sublinks.map((link, index) => {
                  const { label } = link;
                  return (
                    <Typography //Should be NextJS Link but since there are no inner routes, I had to do this.
                      key={index.toString()}
                      color="#737373"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "0.2px",
                      }}
                    >
                      {label}
                    </Typography>
                  );
                })}
              </Stack>
            </Box>
          );
        })}

        <Stack direction="column" gap="20px">
          <Typography
            variant="h5"
            color="#252B42"
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.1px",
            }}
          >
            Get in Touch
          </Typography>

          <SubscribeInputField />
        </Stack>
      </Box>

      <Box
        sx={{
          paddingX: "11%",
          paddingY: "25px",
          width: "100%",
          backgroundColor: "#FAFAFA",
          display: "flex",
          justifyContent: "center",

          "@media (min-width: 768px)": {
            justifyContent: "flex-start",
          },
        }}
      >
        <Typography
          variant="body1"
          color="#737373"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0.2px",
          }}
        >
          Made With Love By Finland All Right Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
