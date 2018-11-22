import React, { Component } from 'react';
import generateName from 'sillyname';
import * as RTC from "@andyet/simplewebrtc";

import './App.scss';


const App = ({ configUrl, roomName }) => (

  <RTC.Provider configUrl={configUrl}>

    <RTC.RemoteAudioPlayer />

    <RTC.Connecting>
      <h1>Client is connecting...</h1>
    </RTC.Connecting>

    <RTC.Disconnected>
      <h1>Client lost connection. Attempting to rejoin...</h1>
    </RTC.Disconnected>

    <RTC.Connected>

      <RTC.RequestUserMedia audio video auto />

      <RTC.Room name={roomName}>

      </RTC.Room>

    </RTC.Connected>

  </RTC.Provider>
);




// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       username: generateName(),
//     };

//     // this.webrtc = new SimpleWebRTC({
//     //   localVideoEl: 'localVideo',
//     //   remoteVideosEl: 'remoteVideos',
//     //   autoRequestMedia: true,
//     // });

//     this.handleChatSubmit = this.handleChatSubmit.bind(this);
//     this.addToChat = this.addToChat.bind(this);
//     this.onChangeName = this.onChangeName.bind(this);
//   };


//   handleChatSubmit(event) {
//     event.preventDefault();
//     let msg = event.target[0].value;

//     // if (msg) {
//     //   this.webrtc.sendDirectlyToAll('p2pchat', 'chat', {
//     //     username: this.state.username,
//     //     message: msg,
//     //   });
//     //   event.target[0].placeholder = '';
//     //   event.target[0].value = '';
//     //   this.addToChat(`${this.state.username} (me)`, msg);
//     // } else {
//     //   event.target[0].placeholder = 'Cannot be blank';
//     // };
//   };

//   addToChat(name, message) {
//     let newText = document.createElement('p');
//     newText.textContent = `${name}: ${message}`;
//     document.querySelector('#text-chat').appendChild(newText);
//   };

//   onChangeName(event) {
//     this.setState({username: event.target.value});
//   };


//   componentDidMount() {
//     const reactThis = this;

//     console.log(this.props);

//     // this.webrtc.on('readyToCall', function () {
//     //   console.log("Joining room: ", reactThis.props.match.params.roomname);
//     //   reactThis.webrtc.joinRoom(reactThis.props.match.params.roomname);
//     // });

//     // this.webrtc.on('channelMessage', function (label, type, data) {

//     //   if (data.type === 'chat') {
//     //     reactThis.addToChat(data.payload.username, data.payload.message);
//     //   };
//     // });
//   }


//   render() {

//     return (
//       <div className="App">

//         <div className="videoDiv">
//           <div>
//             <video id="localVideo"></video>
//           </div>

//           <div>
//             <div id="remoteVideos"></div>
//           </div>
//         </div>

//         <div className="chatDiv">

//           <div id="text-chat"></div>

//           <span>Your name: </span>
//           <input onChange={this.onChangeName} value={this.state.username} />

//           <form onSubmit={this.handleChatSubmit}>
//             <input id="chat-box" placeholder="Enter chat message" />
//             <input type="submit" value="Send" />
//           </form>

//         </div>

//       </div>
//     );
//   }
// }

export default App;
