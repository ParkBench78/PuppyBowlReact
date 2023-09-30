//The PlayerList component
import React from "react";
import { useState, useEffect } from "react";
import PlayerRow from "./PlayerRow";

// Added cohort name to the cohortName variable below
const cohortName = "2306-FTB-ET-WEB-PT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export default function PlayerList({ setSelectedPlayerId }) {
  const [players, setPlayers] = useState([]);
  console.log("Players:", players);
  console.log(players);

  useEffect(() => {
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
    fetchPlayers();
  }, []);

  return (
    <table>
      <caption>Roster</caption>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Team</th>
        </tr>
        {players &&
          players.map((player) => {
            return (
              <PlayerRow
                key={player.id}
                player={player}
                setSelectedPlayerId={setSelectedPlayerId}
              />
            );
          })}
      </tbody>
    </table>
  );
}
