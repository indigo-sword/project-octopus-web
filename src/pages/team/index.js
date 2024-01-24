import React from "react";
import NavBar from "../../components/navbar";
import TeamProfile from "../../components/profile";
import Line from "../../components/line";
import Title from "../../components/title";
import "./index.css";

const Team = () => {
  return (
    <div className="PAGES-about">
      <NavBar />
      <Title text="Meet the Team" />
      <Line />

      <div className="team-profiles">
        <TeamProfile
          imgSrc="images/people/meng.jpg"
          name="Meng Chen"
          gitHubLink="https://casardo-chen.github.io/"
          description="Senior at the University of Notre Dame"
        />
        <TeamProfile
          imgSrc="images/people/joao.jpeg"
          name="Joao Henares"
          gitHubLink="https://jpireshe.github.io/portfolio/"
          description="Senior at the University of Notre Dame"
        />
        <TeamProfile
          imgSrc="images/people/ziang.jpg"
          name="Ziang Tong"
          gitHubLink="https://dannytds.github.io/"
          description="Senior at the University of Notre Dame"
        />
      </div>
    </div>
  );
};

export default Team;
