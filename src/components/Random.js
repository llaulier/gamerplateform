import React from "react";
import "./styles/Game.css";

function Random(games) {
  const allScreens = [];
  games.short_screenshots.map(screen => {
    return allScreens.push(screen.image);
  });
  const getUrlScreen = () => {
    for (let i = 0; i < allScreens.length; i++) {
      return getUrlScreen[i];
    }
  };
  const heroStyle = {
    background: `url( ${getUrlScreen}) no-repeat center center fixed;`
  };

  return (
    <div style={heroStyle}>
      <h1>StreamGame</h1>
    </div>
  );
}
export default Random;
