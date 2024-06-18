import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  const renderRows = requests.map((req, index) => {
    return <Row title={req.title}
      fetchUrl={req.url}
      key={index + 1}
      isLargeRow = {req.title === "Netflix Originals"}
      />;
  });

  return <div className="app">
        <Navbar />
        <Banner />
        {renderRows}
    </div>;
}

export default App;
