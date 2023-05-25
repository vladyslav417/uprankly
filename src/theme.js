import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
    fontSize: 18,
    lineHeight: 1.5,
    h1: {
      fontSize: "2.5rem",
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.75rem",
      lineHeight: 1.5,
      fontWeight: 300,
    },

    h4: {
      fontSize: "1.5rem",
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.8rem",
      lineHeight: 0.7,
      fontWeight: 700,
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.3,
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#07b7b0",
    },
    secondary: {
      main: "#77838f",
    },
    error: {
      main: "#de4437",
    },
    success: {
      main: "#00c9a7",
    },
    info: {
      main: "#00dffc",
    },
    warning: {
      main: "#ffc107",
    },
    background: {
      default: "#fff",
    },
    textWhite: {
      main: "#fff",
    },
    "label-background": {
      main: "rgba(0, 201, 167, 0.1)",
    },
  },
});

export default theme;
