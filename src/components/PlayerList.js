import React from 'react';

import Player from './Player';
import './PlayerList.css';

const PlayerList = (props) => {

  const {
    status,
    Playerlist,
    Players,
  } = props;

  // Add button to display gif when no players

  const ready = status ==="OK";

  const mods = {
    'playfulcyanide': 'Admin',
    'ronaldfoose': 'Admin',
    'vv1ll': 'Mod',
    'thesappster': 'Discord',
    'pogusin': 'Member',
    'notsonoble6': 'Member',
    'soaringkittens': 'Member',
    'nash_contra': 'Member',
    'blade_hawk': 'Member',
    'spydershadow': 'Member',
    'your_dealer': 'Member',
    'nolite': 'Member',
    'classiest': 'Member',
    'aartsyfartsy': 'Member',
    'krisbyingotn': 'Member',
    'bcstay94': 'Member',
    'angry_cyanide': 'Member',
    'libertysteele': 'Member',

  };

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
                className="PlayerList__item"
              >
              <Player 
                name={player}
                mod={mods[player.toLowerCase()]}
              />
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
            Refresh
          </button>
        </div>
      }
    </div>
  )
};

PlayerList.defaultProps = {
  Playerlist: false,
  Players: 0,
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
};

export default PlayerList;