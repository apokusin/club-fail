import React, { Component } from 'react';
import logo from '../images/logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="Header__logo">
          <a href="/">
            <img 
              src={logo}
              className="Header__logo" 
              alt="CLUB.FAIL" 
              height="44"
            />
          </a>
        </h1>
        <nav className="Header__nav">
          <button>Contact mods</button>
          <button>Join the server</button>
          <button>More info</button>
        </nav>
      </div>
    );
  }
}

export default Header;
