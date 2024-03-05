import React from "react";
import "./game.css";
import NavBar from "../../components/navbar/navbar";
import Title from "../../components/title/title";
import Footer from "../../components/footer/footer";
import { Box } from "@mui/material";

const Game = () => {
  return (
    <div className="PAGES-reference">
      <NavBar />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title text="Game" />
        <p>
          So far, we do not have a lot to show for our game. However, we have
          arts and concepts that will be shortly released.
          <img alt="gif for idle" src="Idle.gif" />
          <img alt="gif for attack" src="Walk_1.gif" />
          <img alt="gif for walk" src="Attack1.gif" />
        </p>
        <p>This is Apollo, a CyberKnight for the Bemazon company.</p>
      </Box>
      <Footer />
    </div>
  );
};

export default Game;
