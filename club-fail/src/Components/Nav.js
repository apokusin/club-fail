import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Nav.css';

class Nav extends Component {
  render() {
    return (

        <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/disco/">Disco</Link>
        </li>
        </ul>
        </nav>
    );
  }
}

export default Nav;