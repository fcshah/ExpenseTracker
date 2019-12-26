import React from "react";
import { Redirect } from "react-router";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import dashboard from "./assets/js/dashboard";
import LoginForm from "./assets/js/login";
import signup from "./assets/js/signup";
import Home from "./assets/js/Home";
import HomeCard from './assets/js/card'

const routing = (
  <Router>
  <HomeCard></HomeCard>
    <div> 
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/dashboard" component={dashboard} />
      <Route exact path="/signup" component={signup} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
