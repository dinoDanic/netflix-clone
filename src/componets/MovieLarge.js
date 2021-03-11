import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Movie.scss";
import nLogoImg from "../img/netflixlogo.png";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import "../styles/MovieLarge.scss";

function MovieLarge({ image, name, date }) {
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
    <motion.div
      className="movieLarge"
      initial="hidden"
      animate="show"
      variants={vairants}
      transition={{ duration: 0.3, delay: 0.3 }}
      onHoverStart={() => setMovieHover(true)}
      onHoverEnd={() => setMovieHover(false)}
      whileHover={{
        scale: 1.1,
      }}
    >
      <img src={image} alt="" className="movieLarge__photo" />
      <img src={nLogoImg} alt="" className="movieLarge__logo" />
      <motion.div
        className="movieLarge__controls"
        variants={movie__infoAni}
        animate={movieHover ? "show" : "hidden"}
      >
        <div className="movieLarge__icons">
          <PlayCircleFilledIcon className="movie__icon" />
          <p>{name}</p>
          <p>{date}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MovieLarge;
