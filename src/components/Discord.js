import React, { Component } from 'react';
import './Discord.css';

class Discord extends Component {
  render() {
    return (
      <div className="Discord">
        <iframe
          className="Discord__frame"
          src="https://discordapp.com/widget?id=247892512797229056&theme=dark"
          width="300"
          height="500"
          allowtransparency="true"
          frameborder="0">
        </iframe>
      </div>
    );
  }
}

export default Discord;
