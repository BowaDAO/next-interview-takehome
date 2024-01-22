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
        width="571px"
        spacing="30px"
        alignItems="center"
      >
        <Typography
          variant="h2"
          color="#23A6F0"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0.2px",
          }}
        >
          Designing Better Experience
        </Typography>

        <Typography
          variant="h2"
          color="#252B42"
          sx={{
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: "50px",
            letterSpacing: "0.2px",
          }}
        >
          Problems trying to resolve the conflict between
        </Typography>

        <Typography
          variant="body1"
          color="#737373"
          maxWidth="447px"
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0.2px",
          }}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>

        <Typography
          variant="h5"
          color="#23856D"
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "32px",
            letterSpacing: "0.1px",
          }}
        >
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
          <Typography
            color="#FFF"
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "22px",
              letterSpacing: "0.2px",
            }}
          >
            ADD YOUR CALL TO ACTION
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
};

export default CallToAction;
