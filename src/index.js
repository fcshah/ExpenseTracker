import React from "react";
import { Redirect } from "react-router";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Route,
  Link,
  IndexRoute,
  BrowserRouter as Router
} from "react-router-dom";
//import { IndexRoute } from "react-router";

//import App from './assets/js/login'
import dashboard from "./assets/js/dashboard";

import LoginForm from "./assets/js/login";
import signup from "./assets/js/signup";
//import HomeCard from './assets/js/card'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={LoginForm} />
      {/* <IndexRoute component={LoginForm} /> */}
      {/* <Redirect from="/" to="/login" /> */}
      <Route exact path="/dashboard" component={dashboard} />
      <Route exact path="/signup" component={signup} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
