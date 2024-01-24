import { SvgIcon, Typography, Stack } from "@mui/material";

type Props = {
  icon: JSX.Element;
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

      <Typography variant="h3" color="text.primary">
        {props.heading}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {props.subheading}
      </Typography>
    </Stack>
  );
};

export default ServiceCard;
