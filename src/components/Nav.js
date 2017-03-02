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
              eventLabel="reddit-map"
              to="https://www.reddit.com/r/ClubFail/comments/5ulesr/what_happened_to_the_map/"
              target="_blank">
              {"Where's the map?"}
            </ReactGA.OutboundLink>
          </li>
          <li>
            <ReactGA.OutboundLink
              className="Nav__button"
              eventLabel="reddit-about"
              to="https://www.reddit.com/r/ClubFail/comments/5uli8y/about_the_server/"
              target="_blank">
              {"About the server"}
            </ReactGA.OutboundLink>
          </li>
          <li>
            <ReactGA.OutboundLink
              className="Nav__button"
              eventLabel="reddit-backpacks"
              to="https://www.reddit.com/r/ClubFail/comments/5ulikn/how_to_use_backpacks/"
              target="_blank">
              {"Learn about backpacks"}
            </ReactGA.OutboundLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
