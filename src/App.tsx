import React from "react";
import { Grid } from "@mui/material";
import Section from "./components/layouts/Section";

function App(): React.ReactElement {
  const arr = ["1", "2", "3", "4", "5", "6"];
  return (
    <Grid>
      {arr.map((item: string, index: number) => (
          <Section isOdd={index % 2 === 0}>{item}</Section>
      ))}
    </Grid>
  );
}

export default App;
