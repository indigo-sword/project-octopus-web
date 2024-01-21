import React from "react";
import NavBar from "../../components/navbar";
import TeamProfile from "../../components/profile/profile";
// import Meng from "../../images/meng.jpg";
import "./index.css";

const About = () => {
  return (
    <div className="PAGES-about">
      <NavBar />
      <p>hello world</p>
      <div className="white-line"></div>
        <h1>Meet the Team</h1>
        <div className="team-profiles">
          <TeamProfile 
            imgSrc="meng.jpg" 
            name="Meng Chen" 
            profileLink="https://casardo-chen.github.io/" 
            description="Senior at Notre Dame" 
          />
          <TeamProfile 
            imgSrc="meng.jpg" 
            name="Meng Chen" 
            profileLink="https://casardo-chen.github.io/" 
            description="Senior at Notre Dame" 
          />
          <TeamProfile 
            imgSrc="meng.jpg" 
            name="Meng Chen" 
            profileLink="https://casardo-chen.github.io/" 
            description="Senior at Notre Dame" 
          /> 
        </div>
    </div>
  );
};

export default About;
