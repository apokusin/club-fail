import React, { Component } from 'react';
import Fetch from 'react-fetch';
import ReactGA from 'react-ga';

import Header from './components/Header';
import Nav from './components/Nav';
import JoinNow from './components/JoinNow';
import PlayerList from './components/PlayerList';

import './App.css';
class App extends Component {
  
  componentDidMount() {
    ReactGA.initialize('UA-9559262-25');
  }

  render() {
    return (
      <div className="App">
        <div className="App__content">

          <Header />
          
          <Fetch url="https://api.minetools.eu/query/96.127.157.126">
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
