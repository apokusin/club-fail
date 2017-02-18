import React from 'react';

import Player from './Player';
import './PlayerList.css';

const PlayerList = (props) => {

  const {
    status,
    Playerlist,
    Players,
    Version,
  } = props;

  // Add button to display gif when no players

  const ready = status ==="OK";

  const mods = [
    'playfulcyanide',
    'RonaldFoose',
    'Vv1ll',
    'theSappster',
  ];

  const refresh = () => { window.location.reload()};

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
          Fetching player list…
        </div>
      }
      {ready &&
        <h2 className="heading PlayerList__title">
          {"Online now:"}
        </h2>
      }
      <ul className="PlayerList">        
        {ready && Players === 0 && (
          <div className="PlayerList__item PlayerList__item--empty">
            No players online 😞
          </div>
        )}
        {Playerlist &&
          Playerlist.map((player, index) => {
            return (
              <li
              key={index}
              className={`PlayerList__item ${mods[player] ? 'PlayerList__item--mod' : ''}`}
            >
              <Player name={player} />
            </li>)
          })
        }
      </ul>
      {status !== 'LOADING' &&
        <div className="PlayerList__footer">
          <button 
            className="PlayerList__refresh"
            onClick={refresh}
          >
            Check again
          </button>
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
  Version: React.PropTypes.string,
};

export default PlayerList;