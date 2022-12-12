import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import LayoutRoute from "./LayoutRoute";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path='/' exact={true} component={LandingPage}/>
        <LayoutRoute path='/signup' exact={true} component={SignUpPage}/>
        <LayoutRoute path='/login' exact={true} component={LoginPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;