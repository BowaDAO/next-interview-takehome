import { Typography, Stack } from "@mui/material";

type SectionHeadingProp = {
  h2: string;
  h3: string;
  text: string;
};

const SectionHeading = (props: SectionHeadingProp) => {
  return (
    <Stack direction="column" spacing="10px" alignItems="center">
      <Typography
        variant="h2"
        color="#737373"
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: "30px",
          letterSpacing: "0.2px",
        }}
      >
        {props.h2}
      </Typography>

      <Typography
        variant="h3"
        color="#252B42"
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "32x",
          letterSpacing: "0.1px",
        }}
      >
        {props.h3}
      </Typography>

      <Typography
        variant="body1"
        color="#737373"
        sx={{
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20x",
          letterSpacing: "0.2px",
        }}
      >
        {props.text}
      </Typography>
    </Stack>
  );
};

export default SectionHeading;
