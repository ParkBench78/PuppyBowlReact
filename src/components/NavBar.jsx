//The NavBar component
import { Routes, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link className="players-link" to="/">
        List of Players
      </Link>
      <Link className="singlePlayer-link" to="/SinglePlayer">
        Player's Details
      </Link>
      <Link className="newPlayerForm-link" to="/NewPlayerForm">
        Add a Player
      </Link>
    </div>
  );
}
//
export default NavBar;
