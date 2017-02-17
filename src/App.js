import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import JoinNow from './components/JoinNow';
import Fetch from 'react-fetch'
import PlayerList from './components/PlayerList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__content">
          <Header />
          <Fetch
            url={'https://mcapi.us/server/query?ip=96.127.157.126'}
          >
            <PlayerList />
          </Fetch>
          <Nav />
          <JoinNow />
        </div>
      </div>
    );
  }
}

export default App;
