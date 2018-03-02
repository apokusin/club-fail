import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo-white.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="Header__logo">
          <Link to="/">
            <img 
              src={logo}
              className="Header__logo" 
              alt="CLUB.FAIL" 
              height="54"
              style={{
                opacity: 0.8
              }}
            />
          </Link>
        </h1>
      </div>
    );
  }
}

export default Header;
