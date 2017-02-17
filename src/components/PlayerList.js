import React from 'react';

import Player from './Player';
import './PlayerList.css';

const PlayerList = ({players, status, online, error}) => (
  <ul className="PlayerList">
    <li
      key={'controls'}
      className="PlayerList__controls"
    >
      <h2
        className="PlayerList__title"
      >
        {"Who's online"}
        {error}
        <div className="PlayerList__subtitle">
          Join the server by connecting to <code>club.fail</code>
        </div>
      </h2>
    </li>
    {online &&
      players.list.map((player, index) => (
      <li
        key={index}
        className="PlayerList__item"
      >
        <Player name={player} />
      </li>
    ))}
    {!online && (
      <li key={'placeholder'}>
        <div className="PlayerList__item">
          No players 😞
        </div>
      </li>
    )}
  </ul>
);

PlayerList.defaultProps = {
  status: null,
  players: null,
  online: null,
  error: null,
}


PlayerList.propTypes = {
  status: React.PropTypes.string,
  players: React.PropTypes.object,
  online: React.PropTypes.bool,
  error: React.PropTypes.string,
};

export default PlayerList;