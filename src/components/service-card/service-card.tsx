import { SvgIcon, Typography, Stack } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  heading: string;
  subheading: string;
};

const ServiceCard = (props: Props) => {
  return (
    <Stack
      direction="column"
      spacing="20px"
      marginX="40px"
      marginY="35px"
      alignItems="center"
      textAlign="center"
      maxWidth="235px"
    >
      <SvgIcon height={72} width={72} sx={{ flexShrink: 0 }}>
        {props.icon}
      </SvgIcon>

      <Typography
        variant="h3"
        color="#252B42"
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "32px",
          letterSpacing: "0.1px",
        }}
      >
        {props.heading}
      </Typography>

      <Typography
        variant="body2"
        color="#737373"
        sx={{
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px",
          letterSpacing: "0.2px",
        }}
      >
        {props.subheading}
      </Typography>
    </Stack>
  );
};

export default ServiceCard;
