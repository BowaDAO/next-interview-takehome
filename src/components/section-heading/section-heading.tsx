import { Typography, Stack } from "@mui/material";

type SectionHeadingProp = {
  h2?: string;
  h3?: string;
  text?: string;
};

const SectionHeading = (props: SectionHeadingProp) => {
  return (
    <Stack
      direction="column"
      spacing="10px"
      alignItems="center"
      textAlign="center"
    >
      <Typography variant="body1" color="text.secondary">
        {props.h2}
      </Typography>

      <Typography variant="h3" color="text.primary">
        {props.h3}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {props.text}
      </Typography>
    </Stack>
  );
};

export default SectionHeading;
