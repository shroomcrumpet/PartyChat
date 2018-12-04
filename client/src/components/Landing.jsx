import React from 'react';
import * as UUID from "uuid";
import './Landing.scss';


class Landing extends React.Component {

  constructor(){
    super();
    this.routeToRoom = this.routeToRoom.bind(this);
  }

  routeToRoom(event){
    event.preventDefault();
    let roomName;

    if (!event.target[0].value.length) {
      roomName = UUID.v4();
    } else {
      roomName = event.target[0].value;
    };
    window.location = `/${roomName}`;
  }


  render() {
    return (
      <div className='container'>

        <h1><code>PartyChat</code></h1>
        <p>Truly simple video chat</p>

        <form onSubmit={this.routeToRoom}>
          <span className='createRoomInputWrapper'>
            <span className='createRoomDomain'>partychat.herokuapp.com/</span>
            <input className='createRoomInput' placeholder="Choose a room name" />
          </span>

            <button className='createRoomSubmit' type="submit">
              Start a chat
            </button>

        </form>

      </div>
    );
  }
}


export default Landing;
