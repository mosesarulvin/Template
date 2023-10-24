import { Grid } from "@mui/material";
import React from "react";

type Props = {
  children?: React.ReactNode;
  isOdd?: boolean;
};

const Section: React.FC<Props> = ({ children, isOdd }) => {
  return (
    <Grid
      height={"80vh"}
      sx={{
        backgroundColor: (theme) =>
          (isOdd
            ? theme?.custom?.background?.primary?.main
            : theme?.custom?.background?.primary?.dark)
      }}
    >
      {children}
    </Grid>
  );
};

export default Section;
