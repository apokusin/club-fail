import React, { Component } from 'react';
import ReactGA from 'react-ga';

import LogoFail from '../images/art-talkingfail.png';
import LogoDisco from '../images/art-discographers.jpg';
import LogoCraigslist from '../images/art-craigslist.png';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul className="Nav__list">
          <li>
            <ReactGA.OutboundLink
              className="Nav__button"
              eventLabel="show-talking"
              to="http://www.talking.fail">
              <img
                src={LogoFail}
                height="200"
                width="200"
                alt="Talking Fail Podcast Logo"
              />
            </ReactGA.OutboundLink>
          </li>
          <li>
            <ReactGA.OutboundLink
              className="Nav__button"
              eventLabel="show-discographers"
              to="https://thediscographers.simplecast.fm">
              <img
                src={LogoDisco}
                height="200"
                width="200"
                alt="The Discographers Podcast Logo"
              />
            </ReactGA.OutboundLink>
          </li>
          <li>
            <ReactGA.OutboundLink
              className="Nav__button"
              eventLabel="show-craigslist"
              to="https://www.youtube.com/channel/UCMGfZvEjwDm3LyJFk6qV7Ew/featured">
              <img
                src={LogoCraigslist}
                height="200"
                width="200"
                alt="Cruisin' Craigslist Logo"
              />
            </ReactGA.OutboundLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
