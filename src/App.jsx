import { useState } from "react";
import "./App.css";
import "./API/index.js";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import AllPlayers from "./components/AllPlayers.jsx";
import NewPlayerForm from "./components/NewPlayerForm.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";

function App() {
  return (
    <div id="container">
      <h1>Puppy Bowl in React</h1>
      <NavBar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/SinglePlayer" element={<SinglePlayer />} />
          <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
