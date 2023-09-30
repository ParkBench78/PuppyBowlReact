import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PlayerList from "./components/PlayerList";
import Register from "./components/Register";
import Rosters from "./components/Rosters";

export default function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <h2 className="spacer">Puppy Bowl React</h2>
          <Link className="playerlist-link" to="/">
            Player List
          </Link>
          <Link className="rosters-link" to="/rosters">
            Roster
          </Link>
          <Link className="register-link" to="/register">
            Register
          </Link>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<PlayerList />} />
            <Route path="/rosters" element={<Rosters />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
