// NavBar.jsx component
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";
import PlayerList from "./components/PlayerList";
import Register from "./components/Register";
// import Search from "./components/Search";

export default function NavBar() {
  return (
    <div id="container">
      <div id="navbar">
        <Link className="playerlist-link" to="/">
          Player List
        </Link>
        <Link className="register-link" to="/register">
          Register
        </Link>
        <Link className="search-link" to="/search">
          Search
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<PlayerList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}
