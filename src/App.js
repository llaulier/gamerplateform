import "./App.css";

import axios from "axios";
import React, { useEffect, useState } from "react";
// import Random from "./components/Random";
import { Block } from "styled-loaders-react";
//import Video from "./components/Video";
import ContactList from "./components/ContactList.js";
import GameContext from "./components/GameContext";
// import { Route, Switch } from "react-router-dom";
import GameList from "./components/GameList";
import Menu from "./components/Menu";

function App() {
  const url = "https://wild-games.herokuapp.com/api/v1";
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const contextValue = {
    games: [],
    setGames: "",
  };

  useEffect(() => {
    getGames();
    setLoading(true);
  }, []);

  const getGames = () => {
    axios
      .get(url)
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sortRating = () => {
    const best = [...games].sort(function (a, b) {
      return b.rating - a.rating;
    });
    setGames(best);
  };

  const sortAlpha = () => {
    const aToZ = [...games].sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    setGames(aToZ);
  };

  const handleDelete = (id) => {
    const updatedGames = [...games];
    const index = updatedGames.filter((game) => games.id === id);

    updatedGames.splice(index, 1);

    setGames(updatedGames);
  };

  return (
    <>
      {loading ? (
        <div>
          <p className="paragraphApp">Games are loading</p>
          <Block color="white" size="60px" duration="8s" />
        </div>
      ) : (
        <GameContext.Provider value={contextValue}>
          <div className="App">
            <div className="hero">
              <h1>Game Plateforme</h1>
              <div className="video_container">
                <p className="arrow"> &#60; </p>
                <video className="video" controls>
                  {games.map((item) => (
                    <source key={item.id} src={item.clip.clip} alt="video" />
                  ))}
                </video>
                <p className="arrow"> &#62; </p>
              </div>
            </div>
            <div className="aside">
              <Menu />
            </div>

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
      )}
    </>
  );
}

export default App;
