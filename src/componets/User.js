import React from "react";
import "../styles/User.scss";
import avatarImage from "../img/avatar.png";

function User({ user2 }) {
  return (
    <div className="user">
      <img src={avatarImage} alt="" />
      <p>{user2}</p>
    </div>
  );
}

export default User;
