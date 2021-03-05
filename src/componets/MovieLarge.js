import React, { useState } from "react";
import "../styles/Movie.scss";
import nLogoImg from "../img/netflixlogo.png";

function MovieLarge({ image }) {
  const [movieHover, setMovieHover] = useState(false);
  const vairants = {
    hidden: {},
    show: {
      opacity: 1,
    },
  };
  const movie__infoAni = {
    hidden: { opacity: 0, transition: { delay: 0.3 } },
    show: { opacity: 1, transition: { delay: 0.3 } },
  };
  return (
    <div className="movieLarge">
      <img src={image} alt="" />
      <img src={nLogoImg} alt="" className="movieLarge__logo" />
    </div>
  );
}

export default MovieLarge;
