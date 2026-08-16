import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import App from "./App";

// Global dark theme configuration
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    primary: {
      main: "#e50914", // Cinema red
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
