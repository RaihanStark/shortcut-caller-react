import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#008472",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h1: {
      fontFamily: "Lato",
    },
  },
  shape: {
    borderRadius: 13,
  },
});

export default theme;
