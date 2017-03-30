import React from 'react';

import Header from './Header';
import Nav from './Nav';
import JoinNow from './JoinNow';

const RadioPage = (props) => {
  return (
    <main className="RadioPage">
      <Header />

      <Nav />

      <JoinNow />
    </main>
  );
};

export default RadioPage;