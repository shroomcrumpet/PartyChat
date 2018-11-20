import React, { Component } from 'react';
import SimpleWebRTC from 'simplewebrtc';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remoteVideos',
      autoRequestMedia: true,
      nick: 'Kennypoo',
    });

    this.handleChatSubmit = this.handleChatSubmit.bind(this);
    this.addToChat = this.addToChat.bind(this);
  }


  handleChatSubmit(event) {
    event.preventDefault();
    let msg = event.target[0].value;

    if (msg) {
      this.webrtc.sendDirectlyToAll('p2pchat', 'chat', {
        message: msg,
      });
      event.target[0].placeholder = '';
      event.target[0].value = '';
      this.addToChat('Me', msg);
    } else {
      event.target[0].placeholder = 'Cannot be blank';
    };
  }

  addToChat(name, message) {
    let newText = document.createElement('p');
    newText.textContent = `${name}: ${message}`;
    document.querySelector('#text-chat').appendChild(newText);
  };


  componentDidMount() {
    const reactThis = this;

    this.webrtc.on('readyToCall', function () {
      reactThis.webrtc.joinRoom('testRoom');
    });

    this.webrtc.on('channelMessage', function (label, type, data) {
      // console.log('label: ', label);
      // console.log('type: ', type);
      // console.log('data: ', data);

      if (data.type === 'chat') {
        reactThis.addToChat(label.nick, data.payload.message);
      };
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
        </header>

        <div className="videoDiv">
          <div>
            <video id="localVideo"></video>
          </div>

          <div>
            <div id="remoteVideos"></div>
          </div>
        </div>

        <div className="chatDiv">
          <div id="text-chat"></div>
          <form onSubmit={this.handleChatSubmit}>
            <input id="chat-box" />
            <input type="submit" value="Send" />
          </form>
        </div>

      </div>
    );
  }
}

export default App;
