export default function PlayerRow({ player, setSelectedPlayerId }) {
  return (
    <tr
      onClick={() => {
        setSelectedPlayerId(player.id);
      }}
    >
      <td>{player.name}</td>
      <td>{player.breed}</td>
      <td>{player.teamId}</td>
    </tr>
  );
}
