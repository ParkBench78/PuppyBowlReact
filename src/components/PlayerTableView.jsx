//PlayerTableView.jsx component
import PlayerRow from "./PlayerRow";

export default function PlayerTableView({
  tableName,
  players,
  setSelectedPlayerId,
  fetchPlayers,
}) {
  return (
    <table>
      <caption>{tableName}</caption>
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
