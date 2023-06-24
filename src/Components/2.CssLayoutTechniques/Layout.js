import React from "react";
import { Grid } from "@mui/material";
import Cards from "./Cards";
import data from "./data";

const Layout = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {data.map((d) => (
          <Grid item xs={12} md={3} sm={6}>
            <Cards data={d} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Layout;
