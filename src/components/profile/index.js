import React from "react";
import "./index.css";
import ClickableText from "../clickableText";

function Profile({ imgSrc, name, profileLink, description }) {
  return (
    <div className="team-profile">
      <img src={imgSrc} alt={name} className="team-profile-pic" />
      <ClickableText text={name} to={profileLink} color="#b197de" />
      {description}
    </div>
  );
}

export default Profile;
