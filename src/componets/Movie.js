import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Movie.scss";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function Movie({ moveId, image, movieName, releaseDate }) {
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
      className="movie"
      key={moveId}
      initial="hidden"
      animate="show"
      variants={vairants}
      transition={{ duration: 0.3, delay: 0.3 }}
      onHoverStart={() => setMovieHover(true)}
      onHoverEnd={() => setMovieHover(false)}
      whileHover={{
        scale: 1.3,
      }}
    >
      <img src={image} alt="" />
      <motion.div
        className="movie__controls"
        variants={movie__infoAni}
        animate={movieHover ? "show" : "hidden"}
      >
        <div className="movie__icons">
          <PlayCircleFilledIcon className="movie__icon" fontSize="large" />

          <AddCircleOutlineIcon className="movie__icon" fontSize="large" />
          <ThumbUpAltIcon className="movie__icon" fontSize="large" />
          <ThumbDownIcon className="movie__icon" fontSize="large" />
          <HighlightOffIcon className="movie__icon" fontSize="large" />
        </div>
        <div className="movie__name">
          <p>{movieName}</p>
          <p>{releaseDate}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Movie;
