import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//import App from './assets/js/login'
import Home from './assets/js/Home'
//import signup from './assets/js/signup'
import LoginForm from './assets/js/login'
//import HomeCard from './assets/js/card'

const routing = (
  <Router>
    <div>
      <Route path="/" component={LoginForm} />
      <Route path="/home" component={Home} />
      {/* <Route path="/contact" component={signup} /> */}
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));