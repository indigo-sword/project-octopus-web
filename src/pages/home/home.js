import React from "react";
import "./home.css";
import NavBar from "../../components/navbar/navbar";
import Title from "../../components/title/title";
import Image from "../../components/image/image";

const Home = () => {
  return (
    <div className="PAGES-home">
      <NavBar />
      <Title text="Project Octopus" />
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
  );
};

export default Home;
