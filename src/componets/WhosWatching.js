import React, { useState } from "react";
import "../styles/WhosWatching.scss";
import avatarImage from "../img/avatar.png";
import { useDatalayerValue } from "../Datalayer";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import User from "./User";

function WhosWatching() {
  const [newUser, setNewUser] = useState();
  const [{ user_email, user2 }, dispatch] = useDatalayerValue();
  const userHandler = () => {
    dispatch({
      type: "ADD_USER2",
      user2: newUser,
    });
  };
  const defaultAvatarHandler = () => {
    dispatch({
      type: "USER_WHOSWATCHING",
      user_whosWatching: true,
    });
  };
  return (
    <div className="whosWatching">
      <div className="whosWatching__text">
        <h1>Who's watching?</h1>
      </div>
      <br />
      <div className="whosWatching__users">
        <div className="whosWatching__avatar" onClick={defaultAvatarHandler}>
          <img src={avatarImage} alt="" />
          <br />
          <p>{user_email}</p>
        </div>
        {user2 ? (
          <User user2={user2} />
        ) : (
          <div className="whosWatching__addUserBox" onClick={userHandler}>
            <AddCircleOutlineIcon />
          </div>
        )}
        <div className="whosWatching__addUser">
          <br />
        </div>
        <input type="text" onChange={(e) => setNewUser(e.target.value)} />
      </div>
    </div>
  );
}

export default WhosWatching;
