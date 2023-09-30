// PlayerList.jsx component
import React from "react";
import { useState, useEffect } from "react";
import PlayerRow from "./PlayerRow";
import { APIURL } from "../API/api";
import PlayerTableView from "./PlayerTableView";
import SelectedPlayer from "./SelectedPlayer";

export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  function filterPlayer(player) {
    return searchText === ""
      ? player
      : player.name.toLowerCase().includes(searchText.toLowerCase());
  }

  async function fetchPlayers() {
    try {
      const response = await fetch(APIURL);
      const results = await response.json();
      setPlayers(results.data.players);
      console.log(results.data.players);
    } catch (err) {
      console.error("Trouble fetching AllPlayers!", err);
    }
  }

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div>
      {/* search bar */}
      {!selectedPlayerId && (
        <label>
          Search
          <input
            type="text"
            placeholder="Looking for..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </label>
      )}
      {selectedPlayerId ? (
        <SelectedPlayer
          selectedPlayerId={selectedPlayerId}
          setSelectedPlayerId={setSelectedPlayerId}
        />
      ) : (
        <PlayerTableView
          tableName={"Player List"}
          players={players.filter(filterPlayer)}
          setSelectedPlayerId={setSelectedPlayerId}
          fetchPlayers={fetchPlayers}
        />
      )}
    </div>
  );
}
