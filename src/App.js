import React, { useState, useEffect } from "react";
//import { Route, Switch } from "react-router-dom";
import GameList from "./components/GameList";
import "./App.css";
import ContactList from "./components/ContactList.js";
import axios from "axios";
import GameContext from "./components/GameContext";
//import Random from "./components/Random";

function App() {
  const url = "https://wild-games.herokuapp.com/api/v1";
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const contextValue = {
    games: [],
    setGames: ""
  };

  useEffect(() => {
    getGames();
    setLoading(true);
  }, []);

  const getGames = () => {
    axios
      .get(url)
      .then(res => {
        setGames(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (loading) {
    return <p>Loading GameList...</p>;
  }
  const sortRating = () => {
    const best = [...games].sort(function(a, b) {
      return b.rating - a.rating;
    });
    setGames(best);
  };

  const sortAlpha = () => {
    const aToZ = [...games].sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
    setGames(aToZ);
  };
  const handleDelete = id => {
    const updatedGames = [...games];
    const index = updatedGames.filter(game => games.id === id);

    updatedGames.splice(index, 1);

    setGames(updatedGames);
  };

  return (
    <div>
      <GameContext.Provider value={contextValue}>
        <div className="hero">
          <h1>StreamGame</h1>
        </div>

        <div className="App">
          <div className="content">
            <GameList
              key={games.id}
              game={games}
              sortRating={sortRating}
              sortAlpha={sortAlpha}
              onDelete={handleDelete}
            />
          </div>

          <div className="sidebar">
            <ContactList />
          </div>
        </div>
      </GameContext.Provider>
    </div>
  );
}

export default App;
