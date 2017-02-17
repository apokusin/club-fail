import React from 'react';

import './Player.css';

const Player = ({name}) => {
  
  return (
    <div className="Player">
      {name}
    </div>
  );
};

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Player;