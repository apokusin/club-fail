import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul className="Nav__list">
          <li>
            <a
              className="Nav__button"
              target="_blank"
              href="https://www.reddit.com/r/ClubFail/comments/5ulesr/what_happened_to_the_map/"
            >
              {"Where's the map?"}
            </a>
          </li>
          <li>
            <a
              className="Nav__button"
              href="https://www.reddit.com/r/ClubFail/comments/5uli8y/about_the_server/"
              target="_blank"
            >
              About the server
            </a>
          </li>
          <li>
            <a
              className="Nav__button"
              target="_blank"
              href="https://www.reddit.com/r/ClubFail/comments/5ulikn/how_to_use_backpacks/"
            >
              Learn about backpacks
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
