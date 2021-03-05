import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { Datalayer } from "./Datalayer";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <Datalayer initialState={initialState} reducer={reducer}>
      <App />
    </Datalayer>
  </React.StrictMode>,
  document.getElementById("root")
);
