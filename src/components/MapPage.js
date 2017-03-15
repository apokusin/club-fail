import React, { Component } from 'react';
import Fetch from 'react-fetch';

import Header from './Header';
import Nav from './Nav';
import JoinNow from './JoinNow';
import PlayerList from './PlayerList';

const MapPage = (props) => {
  return (
    <main className="MapPage">
      <Header />

      <Fetch url="https://api.minetools.eu/query/96.127.157.126">
        <PlayerList />
      </Fetch>

      <Nav />

      <JoinNow />
    </main>
  );
};

export default MapPage;