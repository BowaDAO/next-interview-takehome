import {
  Input,
  Box,
  Button,
  Stack,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";

const SubscribeInputField = () => {
  return (
    <Stack direction="row" height="58px">
      <TextField
        variant="outlined"
        label="Your email"
        color="info"
        fullWidth
        InputLabelProps={{ shrink: false }}
        sx={{ width: "204px", borderRadius: 0 }}
      />

      <Button
        variant="contained"
        color="info"
        sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
      >
        Subscribe
      </Button>
    </Stack>
  );
};

export default SubscribeInputField;
