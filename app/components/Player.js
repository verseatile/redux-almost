import React, { Component } from 'react'
import YouTube from 'react-youtube'

export default class Example extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestBranding: 1,
        fs: 0
      }
    };

    return (
      <YouTube
        videoId="pyhaF5YoOms"
         opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
    //event.target.playVideo()
  }
}
