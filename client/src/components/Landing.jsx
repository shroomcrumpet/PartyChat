import React, { Component } from 'react';
import * as UUID from "uuid";


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
      <div>

        <form onSubmit={this.routeToRoom}>
          <input placeholder="Choose a room name" />
          <input type="submit" value="Start chat" />
        </form>

      </div>
    );
  }
}


export default Landing;
