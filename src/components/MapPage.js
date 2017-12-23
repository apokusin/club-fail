import React from 'react';
import Fetch from 'react-fetch';

import Header from './Header';
import Nav from './Nav';
import JoinNow from './JoinNow';
import PlayerList from './PlayerList';

const MapPage = (props) => {
  return (
    <main className="MapPage">
      <Header />

      <Fetch url="https://api.minetools.eu/query/23.94.121.68">
        <PlayerList />
      </Fetch>

      <Nav />

      <JoinNow />
    </main>
  );
};

export default MapPage;