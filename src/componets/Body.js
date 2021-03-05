import React from "react";
import "../styles/Body.scss";
import Movie from "./Movie";
import { useDatalayerValue } from "../Datalayer";
import MovieLarge from "./MovieLarge";

function Body() {
  const [{ popular, topRatedFull, orginals }, dispatch] = useDatalayerValue();

  return (
    <div className="body">
      <div className="body__popular body__margin">
        <h3>Popular on Netflix</h3>
        <div className="body__movieList">
          {popular?.results.map((result) => {
            const base_image_url = "http://image.tmdb.org/t/p/original";
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
        </div>
      </div>

      <div className="body__tranding body__margin">
        <h3>Top Rated</h3>
        <div className="body__movieList">
          {topRatedFull?.map((result) => {
            const base_image_url = "http://image.tmdb.org/t/p/original";
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
        </div>
      </div>
      <div className="body__orginals">
        <h3>Netflix Orginals</h3>
        <div className="body__movieList">
          {orginals?.map((result) => {
            const base_image_url = "http://image.tmdb.org/t/p/original";
            const imagePosterUrl = result.poster_path;
            const imageUrl = base_image_url + imagePosterUrl;
            return <MovieLarge image={imageUrl} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
