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
          So far, we do not have a lot to show for our game. However, we are
          focused on asset gathering and on assembling the base game together so
          we can create a great "vanilla" or canon experience for our users. We
          want you to have the most polished system, so we can fully focus on
          generating arts for you guys to use on the level creator and on the
          game itself.
          <br />
          <img alt="gif for idle" src="Idle.gif" />
          <img alt="gif for attack" src="Walk_1.gif" />
          <img alt="gif for walk" src="Attack1.gif" />
        </p>
        <p>This is Apollo, a CyberKnight.</p>
      </Box>

      <Title text="Milestone 3" />
      <div>
        <video controls width="600">
          <source src="videos/Editing.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p>Creating a new level with the level editor.</p>
      <div>
        <video controls width="600">
          <source src="videos/Saving.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p>Exporting a level to file after finishing editing.</p>
      <div>
        <video controls width="600">
          <source src="videos/Loading.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p>
        Loading a new level for playing, and the player is automatically added
        into the scene.
      </p>
      <Footer />
    </div>
  );
};

export default Game;
