import React, { Component } from 'react';
import logo from './the-discographers.png';
import './App.css';

class Disco extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="The Discographers" width="600" />
        </header>
      </div>
    );
  }
}

export default Disco;
