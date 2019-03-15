import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home.js';
import Disco from './Disco.js';

import Nav from './Components/Nav.js';

import './App.css';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/disco" component={Disco} />
        </div>
      </Router>
    );
  }
}

export default App;
