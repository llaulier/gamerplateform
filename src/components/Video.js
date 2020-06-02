import React from "react";

const Video = (games) => (
  <div>
    <video width="400">
      {games.map((item) => (
        <source key={item.clip.clip} src={item.clip.clip} alt="screenshot" />
      ))}
    </video>
  </div>
);

export default Video;
