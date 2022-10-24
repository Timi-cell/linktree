import React from "react";

const Header = () => {
  return (
    <div className="header-section">
      <div className="share__icon">
        <img src="./images/share.png" alt="share__icon" id="share" />
      </div>
      <div className="image">
        <img
          src="./images/avatar.JPEG"
          alt="profile__img"
          id="profile__img"
          title="Profile image"
        />
        <div className="camera">
          <img src="./images/camera.png" alt="camera-icon" id="camera__icon" />
        </div>
      </div>
      <h1 id="twitter">Oluwa Timilehin</h1>
      <h2 id="slack">Timi</h2>
    </div>
  );
};

export default Header;
