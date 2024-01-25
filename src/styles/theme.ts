import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1240,
      xl: 1920,
    },
  },

  palette: {
    common: {
      white: "#FFF",
    },

    primary: {
      light: "#BDBDBD",
      main: "#ECECEC",
    },

    secondary: {
      main: "#23856D",
      light: "#FAFAFA",
      dark: "#23A6F0",
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
    h1: {
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: "50px",
      letterSpacing: "0.2px",
    },

    h2: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "32px",
      letterSpacing: "0.1px",
    },

    h3: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 700,
      letterSpacing: "0.1px",
    },

    h4: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "32px",
      letterSpacing: "0.1px",
    },

    h5: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0.1px",
    },

    h6: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0.2px",
    },

    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.2px",

      "@media (min-width: 960px)": {
        fontSize: "20px",
        lineHeight: "30px",
      },
    },

    body2: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.2px",
    },
  },

  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "14px",
          lineHeight: "24px",
          fontWeight: 700,
          letterSpacing: "0.2px",
          color: "#737373",
        },
      },
    },
  },
});

export default theme;
