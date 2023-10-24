import {createTheme} from '@mui/material';

declare module '@mui/material/styles' {
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
      grid?: {
        column_center?: {
          display?: string;
          flexDirection?: string;
          alignItems?: string;
          justifyContent?: string;
        };
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      background?: {
        primary?: {
          main?: React.CSSProperties['color'];
          light?: React.CSSProperties['color'];
          dark?: React.CSSProperties['color'];
        };
        secondary?: {
          main?: React.CSSProperties['color'];
          light?: React.CSSProperties['color'];
          dark?: React.CSSProperties['color'];
        };
      };
      grid?: {
        column_center?: {
          display?: React.CSSProperties['display'];
          flexDirection?: React.CSSProperties['flexDirection'];
          alignItems?: React.CSSProperties['alignItems'];
          justifyContent?: React.CSSProperties['justifyContent'];
        };
      };
    };
  }
}

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: '"Poppins", sans-serif;',
      fontSize: '3rem',
      fontWeight: '400'
    },
    h2: {
      fontFamily: '"Poppins", sans-serif;',
      fontSize: '2.5rem',
      fontWeight: '400'
    },
    body1: {
      fontFamily: '"Poppins", sans-serif;',
      fontSize: '1.2rem',
      fontWeight: '450'
    },
    body2: {
      fontFamily: '"Poppins", sans-serif;',
      fontSize: '1.2rem',
      fontWeight: '200',
      cursor: 'pointer',
      margin: '0px 1rem'
    },
    subtitle1: {
      fontFamily: '"Poppins", sans-serif;',
      fontSize: '1.2rem',
      fontWeight: '300'
    }
  },
  custom: {
    background: {
      primary: {
        main: '#23272F',
        light: '#333A45',
        dark: '#181B21'
      }
    }
  }
});

export default theme;
