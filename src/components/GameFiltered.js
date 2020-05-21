import React from "react";
import "./styles/Game.css";

function GameFiltered({ sortRating, sortAlpha }) {
  return (
    <div className="sortbyratings">
      <p>
        Filter by:
        <ul>
          {" "}
          <li
            onClick={() => {
              sortRating();
            }}
          >
            Top game
          </li>
          <li
            onClick={() => {
              sortAlpha();
            }}
          >
            A to Z
          </li>
        </ul>
      </p>
    </div>
  );
}
export default GameFiltered;
