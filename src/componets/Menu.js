import React from "react";
import "../styles/Menu.scss";
import netflixLogoImg from "../img/netflixlogo.png";
import SearchIcon from "@material-ui/icons/Search";
import RedeemIcon from "@material-ui/icons/Redeem";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__holder">
        <div className="menu__left">
          <div className="menu__logo">
            <img src={netflixLogoImg} alt="" />
          </div>
          <div className="menu__items">
            <ul>
              <li className="menu__item menu__item--active">
                <p>Home</p>
              </li>
              <li className="menu__item">
                <p>TV Shows</p>
              </li>
              <li className="menu__item">
                <p>Movies</p>
              </li>
              <li className="menu__item">
                <p>New & Popular</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu__right">
          <div className="menu__search">
            <SearchIcon />
          </div>
          <div className="menu__kids">
            <p>KIDS</p>
          </div>
          <div className="menu__present">
            <RedeemIcon />
          </div>
          <div className="menu__notifications">
            <NotificationsIcon />
          </div>
          <div className="menu__user">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
