import React from "react";
import Game from "./Game";
import GameFiltered from "./GameFiltered";

export default function GameList({ game, sortRating, sortAlpha, onDelete }) {
  return (
    <div>
      <h3>My game list</h3>
      <GameFiltered sortRating={sortRating} sortAlpha={sortAlpha} />
      <div className="container">
        {game.map(games => (
          <div className="view">
            <Game game={games} key={games.id} />
            <img src={games.background_image} alt={games.name} />
            <button onClick={() => onDelete(games.id)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}
