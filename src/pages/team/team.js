import React from "react";
import NavBar from "../../components/navbar/navbar";
import TeamProfile from "../../components/profile/profile";
import Line from "../../components/line/line";
import Title from "../../components/title/title";
import "./team.css";

const Team = () => {
  return (
    <div className="PAGES-about">
      <NavBar />
      <Title text="How and why we keep Octopus transparent, free, and GPL3 licensed" />
      <p>We chose the GPL3 License because we believe in Free and Open Source Software. 
        Having this license means that anyone can use, repurpose, or resell our docs, our blog posts, or our library. 
        We love that it allows anyone to use xyflow for their own projects, 
        and we get to see people build things with Octopus that we never would have imagined.</p>
      <Title text="Meet the Team" />
      <Line color="#b197de"/>

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
