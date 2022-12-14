import React from "react";

const Header = ({ name }) => {
  return (
    <div className="header-section">
      <div className="share-section">
        <div className="shareLink">
          <p>Share Link</p>
          <p id="arrow"></p>
        </div>
        <div className="share__icon">
          <img src="./images/share.png" alt="share__icon" id="share" />
        </div>
        <div className="dots__icon">
          <img src="./images/dots.png" alt="dots" id="dots" />
        </div>
      </div>

      <div className="image">
        <img
          src="./images/avatar.JPEG"
          alt="profileImage"
          id="profile__img"
          title="Profile image"
        />
        <div className="camera">
          <img src="./images/camera.png" alt="camera-icon" id="camera__icon" />
        </div>
      </div>
      <h1 id="twitter">_teeblaq10</h1>
      <h2 id="slack">{name}</h2>
    </div>
  );
};

export default Header;
