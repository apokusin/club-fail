import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  render() {
    return (
      <div className="Map">
        <iframe
          className="Map__iframe"
          src="http://minecraft-host.club.fail:8123"
        />
      </div>
    );
  }
}

export default Map;
