import React from "react";
import "./index.css";
import ClickableText from "../clickableText";
import Icon from "../icon";

function Profile({ imgSrc, name, gitHubLink, description }) {
  return (
    <div className="COMPONENTS-profile">
      <img src={imgSrc} alt={name} className="pic" />
      <ClickableText text={name} to={gitHubLink} color="#b197de" />
      <div>{description}</div>
      <div>
        <Icon link={gitHubLink} filename="github" />
        {/* we could add more links */}
      </div>
    </div>
  );
}

export default Profile;
