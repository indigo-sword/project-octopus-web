import React from "react";
import "./game.css";
import NavBar from "../../components/navbar/navbar";
import Title from "../../components/title/title";

const Game = () => {
  return (
    <div className="PAGES-reference">
      <NavBar />
      <Title text="Game" />
      <p>
      This is our game: actually nothing yet. =]
      </p>
    </div>
  );
};

export default Game;