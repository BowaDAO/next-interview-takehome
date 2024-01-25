import { Box, Button, Stack, Typography } from "@mui/material";

const CallToAction = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: 'url("/assets/images/ctabackground.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "712px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",

        "@media(min-width: 1024px)": {
          height: "640px",
        },
      }}
    >
      <Stack
        marginTop="160px"
        marginBottom="112px"
        spacing="30px"
        alignItems="center"
        paddingX="7%"
      >
        <Typography variant="h6" color="secondary.dark">
          Designing Better Experience
        </Typography>

        <Typography variant="h1" color="text.primary">
          Problems trying to resolve the conflict between
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>

        <Typography variant="h3" color="secondary.main">
          $16.48
        </Typography>

        <Button
          variant="contained"
          color="info"
          sx={{
            height: "52px",
            width: "292px",
          }}
        >
          <Typography variant="h6" color="common.white">
            ADD YOUR CALL TO ACTION
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
};

export default CallToAction;
