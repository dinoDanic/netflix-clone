import React from "react";
import "../styles/Header.scss";
import { useDatalayerValue } from "../Datalayer";
import { Button } from "@material-ui/core";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Header() {
  const [{ topRated }] = useDatalayerValue();
  const base_image_url = "http://image.tmdb.org/t/p/original";

  return (
    <div className="header">
      {topRated && (
        <>
          <div className="header__fullImage">
            {/* <ReactPlayer
              url="https://www.youtube.com/watch?v=h6hZkvrFIj0"
              width="100%"
              height="105vh"
            /> */}
            <img src={base_image_url + topRated.backdrop_path} alt="" />
          </div>
          <div className="header__movieInfo">
            <h1>{topRated.original_title}</h1>
            <br />
            <h2>{topRated.overview}</h2>
            <Button variant="contained" size="large">
              <PlayArrowIcon />
              Play
            </Button>
            <Button variant="outlined" size="large">
              <InfoOutlinedIcon />
              More Info
            </Button>
          </div>
        </>
      )}
      <div className="header__blackBorderBottom"></div>
    </div>
  );
}

export default Header;
