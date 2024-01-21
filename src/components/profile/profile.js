import React from 'react';
import './profile.css'; // Assuming you have a CSS file for styles

function TeamProfile({ imgSrc, name, profileLink, description }) {
  return (
    <div className="team-profile">
      <img src={imgSrc} alt={name} className="team-profile-pic" />
      <div>
        <b><a href={profileLink} target="_blank" rel="noopener noreferrer" className='team-profile-name'>{name}</a></b> <br />
        {description}
      </div>
    </div>
  );
}

export default TeamProfile;