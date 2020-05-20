import React from "react";
import "./styles/Game.css";

function GameFiltered({ sortRating, sortAlpha }) {
  return (
    <div className="sortbyratings">
      <p>
        Filter by:
        <button
          onClick={() => {
            sortRating();
          }}
        >
          Top game
        </button>
        <button
          onClick={() => {
            sortAlpha();
          }}
        >
          A to Z
        </button>
      </p>
    </div>
  );
}
export default GameFiltered;
