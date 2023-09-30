import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PlayerList from "./components/PlayerList";
import Register from "./components/Register";
// import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <h2 className="spacer">Puppy Bowl React</h2>
          <Link className="playerlist-link" to="/">
            Player List
          </Link>
          <Link className="register-link" to="/register">
            Register
          </Link>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<PlayerList />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
