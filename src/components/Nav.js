import React, { Component } from 'react';
import ReactGA from 'react-ga';

import LogoFail from '../images/art-talkingfail.png';
import LogoDisco from '../images/art-discographers.jpg';
import LogoCraigslist from '../images/art-craigslist.jpg';
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
                height="64"
                width="64"
                alt="Talking Fail Podcast Logo"
              />
              Talking Fail Podcast
            </ReactGA.OutboundLink>
          </li>
          <li>
            <ReactGA.OutboundLink
              className="Nav__button"
              eventLabel="show-discographers"
              to="https://thediscographers.simplecast.fm">
              <img
                src={LogoDisco}
                height="64"
                width="64"
                alt="The Discographers Podcast Logo"
              />
              The Discographers Podcast
            </ReactGA.OutboundLink>
          </li>
          <li>
            <ReactGA.OutboundLink
              className="Nav__button"
              eventLabel="show-craigslist"
              to="https://www.youtube.com/watch?v=h4oGzc8Z5yU&feature=youtu.be">
              <img
                src={LogoCraigslist}
                height="64"
                width="64"
                alt="Cruisin' Craigslist Logo"
              />
              Cruisin' Craigslist
            </ReactGA.OutboundLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
