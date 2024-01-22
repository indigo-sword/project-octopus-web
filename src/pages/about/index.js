import React from "react";
import NavBar from "../../components/navbar";
import TeamProfile from "../../components/profile";
import Line from "../../components/line";
import Title from "../../components/title";
import "./index.css";

const About = () => {
  return (
    <div className="PAGES-about">
      <NavBar />
      <Title text="Meet the Team" />
      <Line />

      <div className="team-profiles">
        <TeamProfile
          imgSrc="images/meng.jpg"
          name="Meng Chen"
          profileLink="https://casardo-chen.github.io/"
          description="Senior at the University of Notre Dame"
        />
        <TeamProfile
          imgSrc="images/joao.jpeg"
          name="Joao Henares"
          profileLink="https://github.com/jpireshe"
          description="Senior at the University of Notre Dame"
        />
        <TeamProfile
          imgSrc="images/meng.jpg"
          name="Meng Chen"
          profileLink="https://casardo-chen.github.io/"
          description="Senior at the University of Notre Dame"
        />
      </div>
    </div>
  );
};

export default About;
