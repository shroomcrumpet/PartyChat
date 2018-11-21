import React, { Component } from 'react';
import generateName from 'sillyname';

import './App.scss';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: generateName(),
    };

    this.CONFIG_URL = `https://api.simplewebrtc.com/config/guest/${process.env.REACT_APP_RTC_API_KEY}`

    // this.webrtc = new SimpleWebRTC({
    //   localVideoEl: 'localVideo',
    //   remoteVideosEl: 'remoteVideos',
    //   autoRequestMedia: true,
    // });

    this.handleChatSubmit = this.handleChatSubmit.bind(this);
    this.addToChat = this.addToChat.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
  };


  handleChatSubmit(event) {
    event.preventDefault();
    let msg = event.target[0].value;

    // if (msg) {
    //   this.webrtc.sendDirectlyToAll('p2pchat', 'chat', {
    //     username: this.state.username,
    //     message: msg,
    //   });
    //   event.target[0].placeholder = '';
    //   event.target[0].value = '';
    //   this.addToChat(`${this.state.username} (me)`, msg);
    // } else {
    //   event.target[0].placeholder = 'Cannot be blank';
    // };
  };

  addToChat(name, message) {
    let newText = document.createElement('p');
    newText.textContent = `${name}: ${message}`;
    document.querySelector('#text-chat').appendChild(newText);
  };

  onChangeName(event) {
    this.setState({username: event.target.value});
  };


  componentDidMount() {
    const reactThis = this;

    console.log()

    // this.webrtc.on('readyToCall', function () {
    //   console.log("Joining room: ", reactThis.props.match.params.roomname);
    //   reactThis.webrtc.joinRoom(reactThis.props.match.params.roomname);
    // });

    // this.webrtc.on('channelMessage', function (label, type, data) {

    //   if (data.type === 'chat') {
    //     reactThis.addToChat(data.payload.username, data.payload.message);
    //   };
    // });
  }


  render() {

    return (
      <div className="App">

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

          <span>Your name: </span>
          <input onChange={this.onChangeName} value={this.state.username} />

          <form onSubmit={this.handleChatSubmit}>
            <input id="chat-box" placeholder="Enter chat message" />
            <input type="submit" value="Send" />
          </form>

        </div>

      </div>
    );
  }
}

export default App;
