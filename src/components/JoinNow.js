import React, { Component } from 'react';
import './JoinNow.css';

class JoinNow extends Component {
  render() {
    return (
      <div>
        <a
          className="Join__apply"
          href="http://goo.gl/forms/y8dFcoyVmIYD6tJP2"
          target="_blank"
        >
          Apply to join
        </a>
        <div className="Join__ip">
          Join the server by connecting to <code>club.fail</code>
        </div>
      </div>
    );
  }
}

export default JoinNow;
