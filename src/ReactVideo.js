import React from "react";
import ReactPlayer from "react-player";
export default function FullPlayer(_url) {
  const playerRef = React.useRef();

  return (
    <div className="player-wrapper">
      <ReactPlayer
        ref={playerRef}
        className="react-player"
        url={_url}
        playing={true}
        loop={false}
        light={true}
        width="100%"
        controls={true}
      />
      {/*...*/}
    </div>
  );
}
