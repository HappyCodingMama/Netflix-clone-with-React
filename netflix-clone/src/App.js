import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Tob Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documetaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
