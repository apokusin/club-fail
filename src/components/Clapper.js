import React, { Component } from 'react';
import moment from 'moment';
import classnames from 'classnames';

import './Clapper.css';
import { makeFunny } from './Helpers';

class Clapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      ready: false,
      flashes: 0,
      now: moment().get('second')
    }
  }

  prepare = () => {
    // figures out when to start (when everybody would be in sync, which is as soon as the next second starts)
    // then follow a cadence of 5 seconds(?).
    //  every 5 seconds, toggle

    const timer = setInterval(() => {
      if (moment().milliseconds() <= 5) {
        console.log('ready');
        clearInterval(this.state.timer);
        this.setState({
          timer: null,
          ready: true
        });
        this.launch();
      }      
    }, 5);


    this.setState({
      timer: timer
    })
  };

  nextFlash = () => {
    this.setState({
      flashCount: 0
    })
  };

  launch = () => {    
    // const secondTimer = setInterval(() => {
    //   if (this.state.flashCount >= 4) {
    //     this.nextFlash();
    //     return;
    //   }
    //
    //   this.setState({
    //     flashCount: this.state.flashCount + 1
    //   })
    // }, 1000);

    const secondTimer = setInterval(() => {
      this.setState({
        now: moment().get('second')
      });
    }, 1000);
    
    this.setState({
      timer: secondTimer
    });
  };


  componentDidMount() {
    this.prepare();
  }


  render() {

    const content = this.state.ready ? this.state.now : makeFunny();

    return (
      <div className="Clapper">
        <div className={classnames(
          'Clapper__signal',
          {
            'Clapper__signal--ready': this.state.ready,
          }
          )}
        >
          {content}
        </div>
      </div>
    );
  }
}

export default Clapper;
