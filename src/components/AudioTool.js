import React, { Component } from 'react';
import moment from 'moment';
import classnames from 'classnames';

import './AudioTool.css';

class AudioTool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      ready: false,
      flashCount: 0,
      flashA: false,
      flashB: false,
    }
  }

  prepare = () => {
    // figures out when to start (when everybody would be in sync, which is as soon as the next second starts)
    // then follow a cadence of 5 seconds(?).
    //  every 5 seconds, toggle

    const timer = setInterval(() => {
      const now = moment();
      if (now.milliseconds() <= 5) {
        console.log('ready');
        clearInterval(this.state.timer);
        this.setState({
          timer: null,
          ready: true
        })
        this.launch();
      }      
    }, 5);


    this.setState({
      timer: timer
    })
  }

  nextFlash = () => {
    this.setState({
      flashCount: 0,
      flashA: !this.state.flashA,
      flashB: !this.state.flashB,
    })
  }

  launch = () => {    
    const secondTimer = setInterval(() => {
      if (this.state.flashCount >= 4) {
        this.nextFlash();
        return;
      }

      this.setState({
        flashCount: this.state.flashCount + 1
      })
    }, 1000);
    
    this.setState({
      timer: secondTimer
    })
  }


  componentDidMount() {
    this.prepare();
  }


  render() {
    return (
      <div className="AudioTool">
        <div className={classnames(
          'AudioTool__signal',
          {
            'AudioTool__signal--blink': this.state.ready,
            'AudioTool__signal--a': this.state.flashA,
            'AudioTool__signal--b': this.state.flashB
          }
          )}
        >
          {this.state.flashCount + 1}
        </div>
      </div>
    );
  }
}

export default AudioTool;
