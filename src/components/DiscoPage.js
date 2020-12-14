import React from 'react';

import './Disco.css';

import Logo from '../images/disco.png';


  
const DiscoPage = (props) => {
  return (
    <main
      className="DiscoPage"
      style={{
        textAlign: 'center'
      }}
    >
      <img
        alt="The Discographers Logo"
        src={Logo}
        className="DiscoPage__logo"
        width="300"
        height="300"
        style={{
          textAlign: 'center',
          marginTop: 100,
          marginBottom: 100
        }}
      />
      <h2>Episodes</h2>

    </main>
  );
};

export default DiscoPage;