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
        {status === 'success' && players.list.length > 1 ? "Who's online" : "Nobody online 😞"}
        {error}
        <div className="PlayerList__subtitle">
          Join the server by connecting to <code>club.fail</code>
        </div>
      </h2>
    </li>
    {status === 'success' &&
      players.list.map((player, index) => (
      <li
        key={index}
        className="PlayerList__item"
      >
        <Player name={player} />
      </li>
    ))}
    {status === 'success' && players.list.length < 1 && (
      <li key={'placeholder'}>
        <div className="PlayerList__placeholder">
          No players
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