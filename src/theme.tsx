import { createTheme, colors } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    custom?: {
      background?: {
        primary?: {
          main?: string;
          light?: string;
          dark?: string;
        };
        secondary?: {
          main?: string;
          light?: string;
          dark?: string;
        };
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      background?: {
        primary?: {
          main?: React.CSSProperties["color"];
          light?: React.CSSProperties["color"];
          dark?: React.CSSProperties["color"];
        };
        secondary?: {
          main?: React.CSSProperties["color"];
          light?: React.CSSProperties["color"];
          dark?: React.CSSProperties["color"];
        };
      };
    };
  }
}

const theme = createTheme({
  custom: {
    background: {
      primary: {
        main: "#23272F",
        light: "#333A45",
        dark: "#181B21",
      },
    },
  },
});

export default theme;
