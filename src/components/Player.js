import React from 'react';
import PropTypes from 'prop-types';

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
  name: PropTypes.string.isRequired,
  mod: PropTypes.oneOf([
    'Admin',
    'Mod',
    'Discord',
    'Member',
  ]),
};

export default Player;