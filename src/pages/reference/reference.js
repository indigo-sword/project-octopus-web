import React from "react";
import "./reference.css";
import NavBar from "../../components/navbar/navbar";
import Image from "../../components/image/image";
import Footer from "../../components/footer/footer";
import { Box } from "@mui/material";

const Reference = () => {
  return (
    <div className="PAGES-install">
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
        <Image
          src="illustration.png"
          alt="project illustration"
          height="60vh"
        />
        <p>
          This is an example of how we want the game to function to users. They
          can play different paths with each node of the path having a level
          some other user - or they themselves - created.
          <br /> <br />
          In this example, Player 1 has followed Playthrough 1 with some levels,
          while Player 2 went another route and did Playthrough 2.
          <br /> <br />
          Basically, our main feature is that each node is a level, and has
          saved its next possible levels (the ones that it links to) in our
          database. This means our database for the levels is just basically a
          huge graph! But, of course, we have way more stuff in there, like our
          users, their follows and the paths's information.
          <br />
          <br />
          We are also working with a level editor that not only will feature
          ambience creation, but also character creation (for NPCs and enemies)
          and cutscene creation. We want this level creator to be really cool
          for you.
          <br />
          <br />
          Finally, we believe a 2D soulslike that has a medieval cyberpunk theme
          is something that hasn't been done before, and we are excited to bring
          this to you.
          <br />
          <br />
          If you want to check how all of this works, alongside with the
          implementation, please check our GitHub repos{" "}
          <a href="https://github.com/indigo-sword/project-octopus">
            project-octopus
          </a>{" "}
          and
          <a href="https://github.com/indigo-sword/godot-3.5"> godot-3.5 </a>
          to see some documentation.
        </p>
      </Box>
      <Footer />
    </div>
  );
};

export default Reference;
