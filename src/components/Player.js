import React from 'react';

import './Player.css';

const Player = ({name, mod}) => {
  
  return (
    <div className={`
      Player
      Player--${mod}
    `}>
      <div className="Player__name">{name}</div>
      <div className="Player__mod">{mod}</div>
    </div>
  );
};

Player.defaultProps = {
  mod: 'Guest',
};

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  mod: React.PropTypes.oneOf([
    'Admin',
    'Mod',
    'Discord',
    'Member',
  ]),
};

export default Player;