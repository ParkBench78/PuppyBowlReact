//The SelectedPlayer component
import { useState, useEffect } from "react";
// import SinglePlayer from "./PlayerRow.jsx";
import { APIURL } from "../API/api.js";
import { teamName } from "./PlayerRow.jsx";

export default function SelectedPlayer({
  selectedPlayerId,
  setSelectedPlayerId,
}) {
  const [player, setPlayer] = useState(null);
  console.log(selectedPlayerId);
  useEffect(() => {
    async function getPlayer() {
      try {
        const response = await fetch(`${APIURL}/${selectedPlayerId}`);
        const result = await response.json();
        setPlayer(result.data.player);
        console.log(`fetch by Id result: ${result.data.player.name}`);
      } catch (err) {
        console.log(`contactId fetch error ${err}`);
      }
    }
    getPlayer();
  }, []);
  const handleClick = () => setSelectedPlayerId(null);

  return (
    <div className="selectedPlayerContainer">
      {player && (
        <>
          <h2>{player.name} </h2>
          <h3>Breed: {player.breed}</h3>
          <h3>Status: {player.status}</h3>
          <h3>Team: {teamName(player.teamId)}</h3>
          <img className="image" src={player.imageUrl}></img>
        </>
      )}
      <br />
      <br />
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}
