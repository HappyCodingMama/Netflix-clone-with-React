import React from "react";
import Row from "./Row";
import requests from "./requests";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Start!</h1>
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
