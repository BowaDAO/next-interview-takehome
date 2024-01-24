import { Button, Stack, TextField } from "@mui/material";

const SubscribeInputField = () => {
  return (
    <Stack direction="row" alignItems="flex-start">
      <TextField
        color="info"
        inputMode="text"
        inputProps={{ style: { fontSize: "16px" } }}
        sx={{
          width: "204px",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          "& fieldset": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            height: "58px",
          },
        }}
      />

      <Button
        variant="contained"
        color="info"
        disableElevation
        sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          height: "53px",
        }}
      >
        Subscribe
      </Button>
    </Stack>
  );
};

export default SubscribeInputField;
