import React from "react";
import Row from "./Row";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Start!</h1>
      <Row title="Netflix Original" />
      <Row title="Trending Now" />
    </div>
  );
}

export default App;
