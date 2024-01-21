import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#252B42",
    },

    secondary: {
      main: "#23856D",
    },

    background: {
      default: "#FFF",
    },

    text: {
      primary: "#252B42",
      secondary: "#737373",
    },
  },

  typography: {
    h6: {
      fontSize: "4px",
      fontWeight: 600,
      lineHeight: "24px",
      letterSpacing: "0.2px",
      fontStyle: "normal",
      color: "#FFF",
    },
  },
});

export default theme;
