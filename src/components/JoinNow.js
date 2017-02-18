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
          Join the club
        </a>
        <div className="Join__ip">
          <h3 className="Join__heading">Already a member?</h3>
          <ol>
            <li>Open Minecraft</li>
            <li>Multiplayer</li>
            <li>Add Server</li>
            <li>Server address: <code>club.fail</code></li>
            <li>Done and join!</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default JoinNow;
