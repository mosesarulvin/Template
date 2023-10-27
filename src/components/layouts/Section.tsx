import {Grid} from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
  isOdd: boolean | null | undefined;
}

const Section: React.FC<Props> = ({children, isOdd}) => {
  return (
    <Grid
      // minHeight={'80vh'}
      sx={{
        backgroundColor: theme =>
          !isOdd
            ? theme?.custom?.background?.primary?.main
            : theme?.custom?.background?.primary?.dark
      }}>
      {children}
    </Grid>
  );
};

export default Section;
