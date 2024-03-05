import React from "react";
import "./home.css";
import { Card, CardMedia } from "@mui/material";
import NavBar from "../../components/navbar/navbar";
import Title from "../../components/title/title";
import BranchOut from "../../components/reactFlowDemos/mainDemo/mainDemo";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div className="PAGES-home">
      <NavBar />

      <div>
        <Card
          className="PAGES-home-big-demo"
          sx={{
            display: "flex",
            flexDirection: "row",
            borderRadius: 8,
            backgroundColor: "transparent",
            paddingLeft: 24,
          }}
          elevation={0}
        >
          <div className="PAGES-home-demo-text">
            <Title text="Project Octopus" color="#32dd98" fontSize="8vmin" />
            <p>
              Build Your Interactive Story with Branches, and Play Others'
              Stories
            </p>
          </div>
          <BranchOut />
        </Card>
      </div>

      <div>
        <Card
          className="PAGES-home-card"
          sx={{
            display: "flex",
            maxWidth: "90vw",
            height: "100%",
            borderRadius: 8,
            backgroundColor: "#32035e",
          }}
        >
          <div
            style={{
              display: "block",
              overflow: "auto",
              padding: 30,
              gap: 8,
            }}
          >
            <p>
              <b>What is Project Octopus?</b>
            </p>
            <p>
              Project Octopus is a <b>branch-based</b> game, where each node is
              a level in a path (or storyline) you are playing. Designed to be a
              single-player game with online features, it allows users to create
              their own nodes and paths and share them with others - either via
              popularity or by befriending other users.
            </p>
            <p>
              <b>What is the game like?</b>
            </p>
            <p>
              Team Indigo Sword is developing Project Octopus to be a top-down
              2D soulslike game, set in a medieval cyberpunk environment. You
              will play as a fallen corporate knight, who quit their job after
              realizing the company's true intentions. You will have to fight
              your way through the company's defenses, and uncover the truth
              behind the company's actions.
            </p>
            <p>
              In the game, you will be able to swing you sword to fight through
              enemies, as well as dodge, parry and heal. You will need to be
              careful, though, as the game will be unforgiving and you will have
              to learn from your mistakes. You will also need to keep your
              stamina bar in mind.
            </p>
            <p>
              <b>How is this implemented?</b>
            </p>
            <p>
              The team is using Godot to build the game, alongside with a
              client-server backend. We are building a level / cutscene creation
              tool for users.
              <br /> Every certain amount of time, the community should vote on
              the most liked branches for which should become the canon timeline
              - and this timeline will be played when a new user joins the game
              for the first time. Of course, we don't want to lose the original
              game we developed, so the original / vanilla version will always
              be available, too.
            </p>
          </div>
          <div>
            <CardMedia
              component="img"
              sx={{ maxHeight: "15vw", borderRadius: 8 }}
              image="Octopus-Logo-v3.1 (1).png"
              alt="Live from space album cover"
            />
          </div>
        </Card>
      </div>
      <p>
        Do you want to know more? Check out{" "}
        <a href="https://github.com/indigo-sword/project-octopus">
          our GitHub repo.
        </a>
        and join our <a href="https://discord.gg/pR48sxCSMf">Discord server</a>.
      </p>
      <Footer />
    </div>
  );
};

export default Home;
