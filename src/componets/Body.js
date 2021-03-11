import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Body.scss";
import Movie from "./Movie";
import { useDatalayerValue } from "../Datalayer";
import MovieLarge from "./MovieLarge";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Body() {
  const [{ popular, topRatedFull, orginals }, dispatch] = useDatalayerValue();
  const [bodyHoverPopular, setBodyHoverPopular] = useState(false);
  const [bodyHoverTopRated, setBodyHoverTopRated] = useState(false);
  const [bodyHoverOrginals, setBodyHoverOrginals] = useState(false);
  const [positionMoviePopular, setPositionMoviePopular] = useState(0);
  const [positionMovieTopRated, setPositionMovieTopRated] = useState(0);
  const [positionMovieOrginals, setPositionMovieOrginals] = useState(0);
  const body__LR = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const body_movieListAnimationPopular = {
    show: { x: `${positionMoviePopular}%`, transition: { duration: 0.5 } },
  };

  const setPositionR = () => {
    if (positionMoviePopular === -282) {
      setPositionMoviePopular(-282);
    } else {
      setPositionMoviePopular(positionMoviePopular - 94);
    }
  };
  const setPositionL = () => {
    if (positionMoviePopular === 0) {
      setPositionMoviePopular(0);
    } else {
      setPositionMoviePopular(positionMoviePopular + 94);
    }
  };
  const body_movieListAnimationTopRated = {
    show: { x: `${positionMovieTopRated}%`, transition: { duration: 0.5 } },
  };
  const setPositionR2 = () => {
    if (positionMovieTopRated === -282) {
      setPositionMovieTopRated(-282);
    } else {
      setPositionMovieTopRated(positionMovieTopRated - 94);
    }
  };
  const setPositionL2 = () => {
    if (positionMovieTopRated === 0) {
      setPositionMovieTopRated(0);
    } else {
      setPositionMovieTopRated(positionMovieTopRated + 94);
    }
  };
  const body_movieListAnimationOrginals = {
    show: { x: `${positionMovieOrginals}%`, transition: { duration: 0.5 } },
  };
  const setPositionR3 = () => {
    if (positionMovieOrginals === -282) {
      setPositionMovieOrginals(-282);
    } else {
      setPositionMovieOrginals(positionMovieOrginals - 94);
    }
  };
  const setPositionL3 = () => {
    if (positionMovieOrginals === 0) {
      setPositionMovieOrginals(0);
    } else {
      setPositionMovieOrginals(positionMovieOrginals + 94);
    }
  };

  return (
    <div className="body">
      <motion.div
        className="body__popular body__margin"
        onHoverStart={() => setBodyHoverPopular(true)}
        onHoverEnd={() => setBodyHoverPopular(false)}
      >
        <h3>Popular on Netflix</h3>
        <motion.div
          className="body__scrollL"
          variants={body__LR}
          animate={bodyHoverPopular ? "show" : "hidden"}
          onClick={() => setPositionL()}
        >
          <ChevronLeftIcon className="body__buttonL" />
        </motion.div>
        <motion.div
          className="body__scrollR"
          variants={body__LR}
          animate={bodyHoverPopular ? "show" : "hidden"}
          onClick={() => setPositionR()}
        >
          <ChevronRightIcon className="body__buttonL" />
        </motion.div>
        <motion.div className="body__movieList">
          <motion.div
            className="body__movieAllList"
            variants={body_movieListAnimationPopular}
            animate="show"
          >
            {popular?.results.map((result) => {
              const base_image_url = "http://image.tmdb.org/t/p/w500";
              const imagePosterUrl = result.poster_path;
              const imageUrl = base_image_url + imagePosterUrl;
              return (
                <Movie
                  key={result.id}
                  moveId={result.id}
                  image={imageUrl}
                  movieName={result.original_title}
                  releaseDate={result.release_date}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="body__topRated body__margin"
        onHoverStart={() => setBodyHoverTopRated(true)}
        onHoverEnd={() => setBodyHoverTopRated(false)}
      >
        <h3>Top Rated on Netflix</h3>
        <motion.div
          className="body__scrollL"
          variants={body__LR}
          animate={bodyHoverTopRated ? "show" : "hidden"}
          onClick={() => setPositionL2()}
        >
          <ChevronLeftIcon className="body__buttonL" />
        </motion.div>
        <motion.div
          className="body__scrollR"
          variants={body__LR}
          animate={bodyHoverTopRated ? "show" : "hidden"}
          onClick={() => setPositionR2()}
        >
          <ChevronRightIcon className="body__buttonL" />
        </motion.div>
        <motion.div className="body__movieList">
          <motion.div
            className="body__movieAllList"
            variants={body_movieListAnimationTopRated}
            animate="show"
          >
            {topRatedFull?.map((result) => {
              const base_image_url = "http://image.tmdb.org/t/p/w500";
              const imagePosterUrl = result.poster_path;
              const imageUrl = base_image_url + imagePosterUrl;
              return (
                <Movie
                  key={result.id}
                  moveId={result.id}
                  image={imageUrl}
                  movieName={result.original_title}
                  releaseDate={result.release_date}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="body__orginals body__margin"
        onHoverStart={() => setBodyHoverOrginals(true)}
        onHoverEnd={() => setBodyHoverOrginals(false)}
      >
        <h3>Netflix Orginals</h3>
        <motion.div
          className="body__scrollL body_scrollL2"
          variants={body__LR}
          animate={bodyHoverOrginals ? "show" : "hidden"}
          onClick={() => setPositionL3()}
        >
          <ChevronLeftIcon className="body__buttonL" />
        </motion.div>
        <motion.div
          className="body__scrollR body_scrollR2"
          variants={body__LR}
          animate={bodyHoverOrginals ? "show" : "hidden"}
          onClick={() => setPositionR3()}
        >
          <ChevronRightIcon className="body__buttonL" />
        </motion.div>
        <div className="body__movieList">
          <motion.div
            className="body__movieAllList--Large"
            variants={body_movieListAnimationOrginals}
            animate="show"
          >
            {orginals?.map((result) => {
              const base_image_url = "http://image.tmdb.org/t/p/w500";
              const imagePosterUrl = result.poster_path;
              const imageUrl = base_image_url + imagePosterUrl;
              return (
                <MovieLarge
                  image={imageUrl}
                  key={result.id}
                  name={result.original_title}
                  date={result.release_date}
                />
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Body;
