import React from "react";
import tone from "../audio/j.mp3";
import Sound from "react-sound";

class Music extends React.Component {
  render() {
    return (
      <Sound
        url={tone}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
        volume={10}
      />
    );
  }
}

export default Music;
