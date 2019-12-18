import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Dashboard } from "../Dashboard";
import { Web } from "../Web";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={props => <Web {...props} />} />
      <Route
        exact
        path="/dashboard"
        render={props => <Dashboard {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </Router>
);
