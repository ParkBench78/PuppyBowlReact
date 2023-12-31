// PlayerRow.jsx component
import { APIURL } from "../API/api";
export function teamName(id) {
  if (id === 161) {
    return "RUFF";
  }
  if (id === 162) {
    return "FLUFF";
  }
  return "";
}

export default function PlayerRow({
  player,
  setSelectedPlayerId,
  fetchPlayers,
}) {
  async function handleDelete() {
    const endpoint = `${APIURL}/${player.id}`;

    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
      });
      const result = await response.json();
      console.log("Delete", endpoint);
      console.log("Delete", result);
      await fetchPlayers();
    } catch (err) {
      console.log("Delete", endpoint);
      console.error(err);
    }
  }

  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.breed}</td>
      <td>{teamName(player.teamId)}</td>
      <td>
        <button
          onClick={() => {
            setSelectedPlayerId(player.id);
          }}
        >
          Details
        </button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}
