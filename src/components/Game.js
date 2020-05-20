import React from "react";
import "./styles/Game.css";
import { getStar } from "./Star";

const Game = ({ game }) => (
  <div className="title__game">
    <h4>{game.name}</h4>
    <p className="rating">{getStar(game.rating)}</p>
  </div>
);
export default Game;
