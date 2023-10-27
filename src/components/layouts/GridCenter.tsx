import {Grid} from '@mui/material';
import React from 'react';

interface PropTypes {
  children?: React.ReactNode;
  sx?: React.CSSProperties;
  m?: string;
  direction?: React.CSSProperties['flexDirection'];
}

const GridCenter: React.FC<PropTypes> = ({
  children,
  sx,
  m,
  direction = 'column'
}) => {
  return (
    <Grid
      m={m}
      sx={{...sx}}
      display={'flex'}
      flexDirection={direction}
      alignItems={'center'}
      justifyContent={'center'}>
      {children}
    </Grid>
  );
};

export default GridCenter;
