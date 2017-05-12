import React, { Component } from 'react';
import ReactGA from 'react-ga';
import ClipboardButton from 'react-clipboard.js';

import './JoinNow.css';

class JoinNow extends Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.state = {};
  }
  
  onSuccess() {
    console.log('copied');
    this.setState({
      copied: true
    })

    if (!this.copyTimeout) {
      this.copyTimeout = setTimeout(() => {
        this.setState({
          copied: false
        });
        this.copyTimeout = null;
      }, 2000);
    }
  };

  render() {
    return (
      <div>
        <ReactGA.OutboundLink
          className="Join__apply"
          eventLabel="join-application"
          to="https://goo.gl/forms/y8dFcoyVmIYD6tJP2">
          {"Join the club"}
        </ReactGA.OutboundLink>
        <div className="Join__ip">
          <h3 className="Join__heading">Already a member?</h3>
          <ol>
            <li>Open Minecraft</li>
            <li>Multiplayer</li>
            <li>Add Server</li>
            <li>
              Server address:
              <ClipboardButton
                className={`
                  Join__ip-button
                  ${this.state.copied ? 'Join__ip--copied': ''}
                `}
                data-clipboard-text="club.fail"
                button-title="Server address to join club.fail"
                onSuccess={this.onSuccess}
              >
                club.fail
              </ClipboardButton>
            </li>
            <li>Done and join!</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default JoinNow;
