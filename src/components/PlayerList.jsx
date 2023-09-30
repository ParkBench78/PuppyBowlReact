// PlayerList.jsx component
import React from "react";
import { useState, useEffect } from "react";
import PlayerRow from "./PlayerRow";

// Added cohort name to the cohortName variable below
const cohortName = "2306-FTB-ET-WEB-PT";
// Use the APIURL variable for fetch requests
export const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export default function PlayerList({ setSelectedPlayerId }) {
  const [players, setPlayers] = useState([]);
  const [needsToFetchPlayers, setNeedsToFetchPlayers] = useState(false);
  console.log("Players:", players);
  console.log(players);

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
  }, [needsToFetchPlayers]);

  return (
    <table>
      <caption>Player List</caption>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Team</th>
          <th></th>
        </tr>
        {players &&
          players.map((player) => {
            return (
              <PlayerRow
                key={player.id}
                player={player}
                setSelectedPlayerId={setSelectedPlayerId}
                fetchPlayers={fetchPlayers}
              />
            );
          })}
      </tbody>
    </table>
  );
}
