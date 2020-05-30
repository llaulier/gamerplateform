import React from "react";
import "./styles/Menu.css";
import "../App.css";

const Menu = () => {
  return (
    <>
      <aside className="navbar">
        <div class="menu">
          <div class="menu__info">
            <img
              src="https://randomuser.me/api/portraits/men/17.jpg"
              alt="My Pic"
            />
            <h4>Paul White</h4>
          </div>
          <nav>
            <ul>
              <a href="https://www.twitch.tv/">
                <li>
                  <img src="/twitch.png" alt="twitch logo" />
                  <span>twitch.tv</span>
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
