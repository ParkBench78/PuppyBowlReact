import "./App.css";
import { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import PlayerList from "./components/PlayerList";
import SelectedPlayer from "./components/SelectedPlayer";

export default function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  return (
    <>
      {selectedPlayerId ? (
        <SelectedPlayer
          selectedPlayerId={selectedPlayerId}
          setSelectedPlayerId={setSelectedPlayerId}
        >
          Selected Player View
        </SelectedPlayer>
      ) : (
        <PlayerList setSelectedPlayerId={setSelectedPlayerId} />
      )}
    </>
  );
}
