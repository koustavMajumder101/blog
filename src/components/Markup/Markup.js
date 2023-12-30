import { Grid } from "@mui/material";
import React from "react";
import MainSection from "./MainSection/MainSection";
import SideBar from "./SideBar.js/SideBar";

function Markup() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8} md={8}>
        <MainSection title="From the community" />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <SideBar />
      </Grid>
    </Grid>
  );
}

export default Markup;
