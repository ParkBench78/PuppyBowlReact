import { useState, useEffect } from "react";
import PlayerTableView from "./PlayerTableView";
import { APIURL } from "../API/api";
import SelectedPlayer from "./SelectedPlayer";

export default function Rosters() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

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
      {selectedPlayerId ? (
        <SelectedPlayer
          selectedPlayerId={selectedPlayerId}
          setSelectedPlayerId={setSelectedPlayerId}
        />
      ) : (
        <div>
          <PlayerTableView
            tableName={"Team FLUFF"}
            players={players.filter((player) => {
              return player.teamId === 162;
            })}
            setSelectedPlayerId={setSelectedPlayerId}
            fetchPlayers={fetchPlayers}
          />
          <PlayerTableView
            tableName={"Team RUFF"}
            players={players.filter((player) => {
              return player.teamId === 161;
            })}
            setSelectedPlayerId={setSelectedPlayerId}
            fetchPlayers={fetchPlayers}
          />
          <PlayerTableView
            tableName={"Unassigned"}
            players={players.filter((player) => {
              return player.teamId !== 162 && player.teamId !== 161;
            })}
            setSelectedPlayerId={setSelectedPlayerId}
            fetchPlayers={fetchPlayers}
          />
        </div>
      )}
    </div>
  );
}
