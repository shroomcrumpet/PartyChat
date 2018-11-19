import React, { Component } from 'react';
import SimpleWebRTC from 'simplewebrtc';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  componentDidMount() {
    var webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remoteVideos',
      autoRequestMedia: true
    });

    webrtc.on('readyToCall', function () {
      webrtc.joinRoom('testRoom');
    });
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div className="videoDiv">
          <div>
            <video id="localVideo"></video>
          </div>
          <div id="remoteVideos"></div>
        </div>

      </div>
    );
  }
}

export default App;
