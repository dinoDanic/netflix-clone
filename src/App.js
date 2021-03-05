import React, { useEffect } from "react";
import "./styles/App.css";
import Menu from "./componets/Menu";
import Header from "./componets/Header";
import axios from "axios";
import { useDatalayerValue } from "./Datalayer";
import { topRatedUrl } from "./api";

function App() {
  const [, dispatch] = useDatalayerValue();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=806b77e869cb164b4c4ded05ba02c78a&language=en-US&page=1"
      )
      .then((data) => {
        console.log();
        const topRated = data.data.results[15];
        dispatch({
          type: "TOP_RATED1",
          topRated: topRated,
        });
      });
  }, []);

  return (
    <div className="app">
      <Menu />
      <Header />
      {/* body */}
    </div>
  );
}

export default App;
