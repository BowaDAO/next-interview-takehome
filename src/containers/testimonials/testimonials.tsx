import { Box, Stack, ImageList, ImageListItem } from "@mui/material";
import { TestimonialMessage } from "@/components";
import Image from "next/image";
import { testimonialImagesData } from "@/constants/data";

const Testimonials = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingY: "40px",
        paddingX: "11%",
        display: "flex",
        flexDirection: "column",
        gap: "37px",
        alignItems: "center",

        "@media(min-width: 1024px)": {
          paddingY: "80px",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 0,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",

          "@media(min-width: 1024px)": {
            width: "45%",
          },
        }}
      >
        <TestimonialMessage />
      </Box>

      <Stack
        sx={{
          "@media(min-width: 1024px)": {
            width: "45%",
          },
        }}
      >
        <ImageList cols={3}>
          {testimonialImagesData.map((item) => {
            return (
              <ImageListItem
                key={item.id}
                sx={{
                  marginY: "1px",

                  "@media(min-width: 960px)": { marginY: "4px" },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: "112px",
                    width: "112px",

                    "@media(min-width: 960px)": {
                      height: "143px",
                      width: "143px",
                    },
                  }}
                >
                  <Image
                    src={item.img}
                    alt={`image-${item.id}`}
                    quality={100}
                    fill
                    loading="lazy"
                    sizes="any"
                  />
                </Box>
              </ImageListItem>
            );
          })}
        </ImageList>
      </Stack>
    </Box>
  );
};

export default Testimonials;
