//The SelectedPlayer component
import SinglePlayer from "./PlayerRow.jsx";
import { useState, useEffect } from "react";

export default function SelectedPlayer({
  selectedPlayerId,
  setSelectedPlayerId,
}) {
  const [player, setPlayer] = useState(null);
  console.log(selectedPlayerId);
  useEffect(() => {
    async function getPlayer() {
      try {
        const response = await fetch(`APIURL${selectedPlayerId}`);
        const result = await response.json();
        setPlayer(result);
        console.log(`fetch by Id result: ${player.name}`);
      } catch (err) {
        console.log(`contactId fetch error ${err}`);
      }
    }
    getPlayer();
  }, []);
  const handleClick = () => setSelectedPlayerId(null);

  return (
    <>
      {player && (
        <>
          <h2>{player.name} </h2>
          <h3>{player.breed}</h3>
          <h3>{player.status}</h3>
          <h3>{player.teamId}</h3>
          {/* <img>${player.imageUrl}</img> */}
        </>
      )}
      <button onClick={handleClick}>Go Back to List</button>
    </>
  );
}
