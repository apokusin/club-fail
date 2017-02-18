import React from 'react';

import Player from './Player';
import './PlayerList.css';

const PlayerList = (props) => {

  const {
    status,
    Playerlist,
    Players,
    MaxPlayers,
    Version,
  } = props;

  // Add button to display gif when no players

  const ready = status ==="OK";

  return (
    <div 
      className={`
        PlayerList__wrapper 
        ${ready ? 'PlayerList__wrapper--ready' : '' }
      `}>
      {status === "ERR" &&
        <h2 className="heading PlayerList__title PlayerList__title--error">
          {"Server is sleeping"}
        </h2>
      }
      {status === "LOADING" &&
        <div className="heading PlayerList__title PlayerList__title--loading">
          Loading player list…
        </div>
      }
      {ready &&
        <h2 className="heading PlayerList__title">
          {"Online now!"}
        </h2>
      }
      <ul className="PlayerList">        
        {ready && Players === 0 && (
          <div className="PlayerList__item PlayerList__item--empty">
            No players 😞
          </div>
        )}
        {Playerlist &&
          Playerlist.map((player, index) => (
            <li
              key={index}
              className="PlayerList__item"
            >
              <Player name={player} />
            </li>
          ))
        }
      </ul>
      {false && ready &&
        <div className="PlayerList__footer">
          <div className="PlayerList__join">
            Join the server by connecting to <code>club.fail</code>
          </div>
          <div className="PlayerList__facts">
            {Version && <div>{'Server version:'} <code>{Version}</code></div>}
          </div>
        </div>
      }
    </div>
  )
};

PlayerList.defaultProps = {
  Playerlist: false,
  Players: 0,
  Version: '',
  status: 'LOADING',
}


PlayerList.propTypes = {
  status: React.PropTypes.oneOf(['OK', 'ERR', 'LOADING']),
  Playerlist: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.arrayOf(
      React.PropTypes.string
    )
  ]),
  Players: React.PropTypes.number,
  MaxPlayers: React.PropTypes.number,
  Version: React.PropTypes.string,
};

export default PlayerList;