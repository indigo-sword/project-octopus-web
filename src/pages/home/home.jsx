import React from "react";
import "./home.css";
import {Card, CardMedia} from '@mui/material';
import NavBar from "../../components/navbar/navbar";
import Title from "../../components/title/title";
import BranchOut from "../../components/reactFlowDemos/branchOut/branchOut";

const Home = () => {
  return (
    <div className="PAGES-home">
      <NavBar />
      <Card 
        className="PAGES-home-card"
        sx={{ 
          display: "flex",
          flexDirection: "row",
          maxWidth: "70vw",
          borderRadius: 8,
          backgroundColor: "transparent",
          height: '1500px', 
        }}>
        <div style={{ 
          padding: 16,
          gap: 8,
          width: "35vw",
          display: "flex",
          flexDirection: "column",
        }}>
          <Title text="Project Octopus" color="#32dd98" />
          <p>
            Build Your Interactive Story with Branches, and Play Others' Stories
          </p>
        </div>
        <BranchOut />
      </Card>
      <Card 
        className="PAGES-home-card"
        sx={{ 
          display: "flex",
          maxWidth: "70vw",
          height: '1500px',
          borderRadius: 8,
          backgroundColor: "#7e2ed6",
          minHeight: 'fit-content' 
        }}>
        <div style={{ 
          padding: 16,
          gap: 8,
          display: "flex",
          flexDirection: "column",
          }}>
          
          <p>
            What we want to create is a game, with our own story, levels and
            characters.
            <br /> <br />
            However, when a user ends the game (or enters the branches mode), they
            can see the canon story as a sequence of nodes and create their own
            branches with new levels and story, leading to the same or to different
            stories and endings.
            <br /> <br />
            Users should be able even to create branches from others users'
            previously created branches. These branches should be collections of
            level nodes.
          </p>
        </div>
        <CardMedia
          component="img"
          sx={{ width: 500 }}
          image="Octopus-Logo-v3.1 (1).png"
          alt="Live from space album cover"
        />
      </Card>
      <div>
      <p>
           
            <br /> <br />
            For this all to be possible, we will need to build a level / cutscene
            creation tool for users.
            <br /> <br />
            Every certain amount of time, the community should vote on the most
            liked branches for which should become the canon timeline - and this
            timeline will be played when a new user joins the game for the first
            time. Of course, we don't want to lose the original game we developed,
            so the original / vanilla version would always be available, too.
            <br /> <br />
            As for the game engine, the group imagines using Godot matches the
            purpose of this game. For the game mechanics themselves, the group is
            still deciding on details.
      </p>
      </div>

    </div>
  );
};

export default Home;
