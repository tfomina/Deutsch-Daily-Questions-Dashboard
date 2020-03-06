import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Dashboard } from "../Dashboard";
import { Web } from "../Web";

const theme = createMuiTheme({
  typography: {
    fontSize: 18
  },
  palette: {
    background: {
      default: "#fff"
    }
  }
});

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

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
  </ThemeProvider>
);
