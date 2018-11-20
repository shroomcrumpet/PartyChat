import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';


class Landing extends React.Component {

  constructor(){
    super();
    this.routeToRoom = this.routeToRoom.bind(this);
  }

  routeToRoom(event){
    event.preventDefault();
    let path = `/${event.target[0].value}`;
    window.location = path;

    // this.props.history.push(path);
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
// export default withRouter(Landing);