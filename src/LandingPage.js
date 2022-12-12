import React from "react";
import Hero from "./Hero";
import { Grid } from "@mui/material";
import PropertyCard from "./PropertyCard";
import propertyData from "./propertyData";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#9E7676'
      }
    }
  }
);

export default function LandingPage() {

  return (
    <ThemeProvider theme={theme}>
      <Hero/>
      <Grid container justifyContent="center">
        {propertyData.map(e => {
          return <Grid item md={3}><PropertyCard title={e.title} price={e.price} description={e.description} img={e.img}/></Grid>
        })}
      </Grid>
    </ThemeProvider>
  );
};