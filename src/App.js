import React, { Component } from 'react';
import ReactGA from 'react-ga';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import MapPage from './components/MapPage';
import RadioPage from './components/RadioPage';

import './App.css';
class App extends Component {
  
  componentDidMount() {
    ReactGA.initialize('UA-9559262-25');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <div className="App__content">
          <Router>
            <div>
              <Route exact path="/" component={MapPage}/>
              <Route path="/fm" component={RadioPage}/>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
