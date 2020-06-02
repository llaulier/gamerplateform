import React from "react";
import "./styles/Menu.css";
import "../App.css";

const Menu = () => {
  return (
    <>
      <aside className="navbar">
        <div className="menu">
          <div className="menu__info">
            <a href="https://www.twitch.tv/">
              <img src="/twitch.png" alt="twitch logo" />
            </a>
          </div>
          <nav>
            <ul>
              <a href="https://www.twitch.tv/">
                <li>
                  <img src="/film.png" alt="movie logo" />
                </li>
              </a>
              <a href="https://discord.com/">
                <li>
                  <img src="/computer.png" alt="game logo" />
                </li>
              </a>
              <a href="https://store.steampowered.com/?l=french">
                <li>
                  <img src="/steam.png" alt="steam logo" />
                </li>
              </a>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
export default Menu;
