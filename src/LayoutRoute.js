import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
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


export default function LayoutRoute(props) {
    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <Route path={props.path} exact={props.exact} component={props.component}/>
            <Footer/>
        </ThemeProvider>
    );
};