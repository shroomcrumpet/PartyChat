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

        {({ room, peers, localMedia, remoteMedia }) => {

          if (!room.joined) {
            return <h1>Joining {roomName}...</h1>;
          };

          const remoteVideos = remoteMedia.filter(media => media.kind === 'video');
          const localVideos = localMedia.filter(media => media.kind === 'video' && media.shared);
          const localScreens = localVideos.filter(media => media.screenCapture);

          return (

            <div className='UIcontainer'>

              <div className='UItoolbar'>

                <h1>{room.providedName}</h1>

                <div>
                  <span>{peers.length + 1} Participant{peers.length !== 0 ? 's' : ''}</span>
                  <RTC.PeerList room={room.address} speaking render={({ peers }) => {
                    if (peers.length === 0) {
                      return null;
                    }
                    return (<span> ({peers.length} speaking)</span>);
                  }} />
                </div>

                <div>
                  {/* No local screenshares */}
                  {!localScreens.length && <RTC.RequestDisplayMedia />}

                  {/* autoRemove removes media track once it has been unshared */}
                  {!!localScreens.length && <RTC.MediaControls media={localScreens[0]} autoRemove render={({ stopSharing }) => (
                    <button onClick={stopSharing}>Stop Screenshare</button>
                  )} />}
                </div>

                <RTC.UserControls render={({ user, isMuted, mute, unmute, setDisplayName }) => (
                  <div>

                    <input className='displayNameEditor'
                      value={user.displayName}
                      onChange={(event) => {
                        setDisplayName(event.target.value.trim());
                      }}
                    />

                    <button onClick={() => isMuted ? unmute() : mute()}>
                      {isMuted ? 'Unmute' : 'Mute'}
                    </button>

                  </div>
                )} />

              </div>

              <div className='mainContainer'>

                <div className='videoContainer'>
                  <RTC.GridLayout
                    className='videoGrid'
                    items={localVideos.concat(remoteVideos)}
                    renderCell={(item) => (<RTC.Video media={item} />)}
                  />
                </div>

                <div className='chatContainer'>

                  <RTC.ChatList
                    room={room.address}
                    className='chatList'
                    renderGroup={({ chats, peer }) => (
                      <div className='chatMsgGroup' key={chats[0].id}>

                        <div className='chatMsgMetadata'>
                          <div className='chatDisplayName'>
                            {peer.displayName ? peer.displayName : 'Anonymous'}
                          </div>
                          {' '}
                          <div className='chatTimeStamp'>
                            {chats[0].time.toLocaleTimeString()}
                          </div>
                        </div>

                        {chats.map(message => (
                          <div className='chatMsg' key={message.id}>{message.body}</div>
                        ))}

                      </div>
                    )}
                  />

                  <div className='chatInputContainer'>

                    <RTC.ChatInput
                      room={room.address}
                      placeholder='Send a message...'
                    />

                    {/* Receives list of peers typing in room - provide a custom render */}
                    <RTC.ChatComposers className='chatTyping' room={room.address} />

                  {/* chatInputContainer */}
                  </div>

                {/* chatContainer */}
                </div>

              {/* mainContainer */}
              </div>

            {/* UIcontainer */}
            </div>
          );
        }}

      </RTC.Room>

    </RTC.Connected>

  </RTC.Provider>
);


export default App;

