//The AllPlayers component
import {
  fetchAllPlayers,
  renderAllPlayers,
  renderAllPlayerCards,
} from "../script";
import { useState, useEffect } from "react";
function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setPlayers(await fetchAllPlayers());
      await renderAllPlayerCards(players);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>All Players</h2>
      {console.log("The All Players Component")}
      <div id="all-players-container">Roster</div>
    </div>
  );
}
export default AllPlayers;
