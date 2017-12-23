import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul className="Nav__list">
          <li>
            <ReactGA.OutboundLink
              className="Nav__button"
              eventLabel="reddit-about"
              to="https://www.reddit.com/r/ClubFail/comments/5uli8y/about_the_server/">
              {"About the server"}
            </ReactGA.OutboundLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
