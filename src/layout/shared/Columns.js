import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
// import "./Columns.css";

const Columns = (props) => {
  //Mui screen sizing

  const [numOfColumns, setNumOfColumns] = useState(null);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!props.customColumns) {
      setNumOfColumns(12 / props.children.length);
    }
  }, []);
  return (
    <Grid
      className="two-column-container"
      container
      columns={{ xs: 1, md: 12 }}
      spacing={isSmall ? 0 : 2}
    >
      {React.Children.map(props.children, (c, i) => (
        <Grid
          item
          xs={props.customColumns ? props.customColumns[i] : numOfColumns}
        >
          {c}
        </Grid>
      ))}
    </Grid>
  );
};
export default Columns;
