import React from 'react';
import LandingPage from './components/pages/LandingPage';
import {ThemeProvider} from '@emotion/react';
import theme from './theme';
import {CssBaseline} from '@mui/material';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
