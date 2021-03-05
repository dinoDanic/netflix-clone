import React, { useEffect } from "react";
import "./styles/App.css";
import Menu from "./componets/Menu";
import Header from "./componets/Header";
import axios from "axios";
import { useDatalayerValue } from "./Datalayer";
import Body from "./componets/Body";

function App() {
  const [{ popular }, dispatch] = useDatalayerValue();
  function makeURL() {}
  useEffect(() => {
    let num = Math.random() * 20;
    console.log(num);
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=806b77e869cb164b4c4ded05ba02c78a&language=en-US&page=1"
      )
      .then((data) => {
        const topRated = data.data.results[Math.round(Math.random() * 20)];
        dispatch({
          type: "TOP_RATED1",
          topRated: topRated,
        });
        dispatch({
          type: "TOP_RATED",
          topRatedFull: data.data.results,
        });
      });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=806b77e869cb164b4c4ded05ba02c78a&language=en-US&page=1"
      )
      .then((data) => {
        dispatch({
          type: "POPULAR",
          popular: data.data,
        });
      });
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=806b77e869cb164b4c4ded05ba02c78a"
      )
      .then((data) => {
        dispatch({
          type: "ORGINALS",
          orginals: data.data.results,
        });
      });
  }, []);

  return (
    <div className="app">
      <Menu />
      <Header />
      <Body />
    </div>
  );
}

export default App;
