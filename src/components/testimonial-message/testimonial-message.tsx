import { images } from "@/constants";
import { Box, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";

const TestimonialMessage = () => {
  return (
    <Stack direction="column" alignItems="center" spacing="28px">
      <Typography
        variant="h6"
        color="#252B42"
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "32px",
          letterSpacing: "0.1px",
        }}
      >
        What they say about us
      </Typography>

      <Stack
        direction="column"
        spacing="20px"
        alignItems="center"
        textAlign="center"
        marginY="30px"
        marginX="35px"
      >
        <Box
          sx={{
            position: "relative",
            display: "block",
            width: "90px",
            height: "90px",
            borderRadius: "100%",
          }}
        >
          <Image
            src={images.customerimage}
            alt="customer-image"
            fill
            quality={100}
            style={{ objectFit: "contain" }}
            sizes="any"
          />
        </Box>

        <Rating value={4} />

        <Typography
          variant="h6"
          color="#737373"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "24px",
            leterSpacing: "0.2px",
          }}
        >
          Slate helps you see how many more days you need to work to reach your
          financial goal
        </Typography>

        <Stack direction="column" alignItems="center">
          <Typography
            variant="body2"
            color="#23A6F0"
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "24px",
              leterSpacing: "0.2px",
            }}
          >
            Regina Miles
          </Typography>

          <Typography
            variant="h6"
            color="#252B42"
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "24px",
              leterSpacing: "0.2px",
            }}
          >
            Designer
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TestimonialMessage;
