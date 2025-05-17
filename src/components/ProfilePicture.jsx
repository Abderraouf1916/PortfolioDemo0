import React from 'react';
import './ProfilePicture.css';  
import profilePic from '../assets/pfp.png';  

const ProfilePicture = () => {
  return (
    <div className="profile-picture-container">
      <img src={profilePic} alt="Profile" className="profile-picture" />
    </div>
  );
};

export default ProfilePicture;
