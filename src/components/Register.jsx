// Register.jsx component

import { useEffect, useState } from "react";
import "../index.css";
import { APIURL } from "../API/api";

const addNewPlayer = async (player) => {
  try {
    const response = await fetch(APIURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    const result = await response.json();
    console.log("Add new Player", result);
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

export default function Register() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("bench");
  const [teamId, setTeamId] = useState(162);

  async function handleSubmit(e) {
    e.preventDefault();

    alert(
      `New Player Added-- NAME: ${name}, BREED: ${breed}, STATUS: ${status}, Team: ${
        teamId === 161 ? "RUFF" : "FLUFF"
      }`
    );
    const player = {
      name: name,
      breed: breed,
      status: status,
      teamId: teamId,
      imageUrl:
        "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-3_1562-692.jpg",
    };
    await addNewPlayer(player);
    setName("");
    setBreed("");
    setStatus("");
    setTeamId(0);
  }
  return (
    <div id="entry">
      <h2>Register Player</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />

        <label>
          Breed:
          <input
            type="text"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </label>
        <br />
        <div>
          <label>
            Status:
            <select
              name="status"
              id="status"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="bench">Bench</option>
              <option value="field">Field</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Team:
            <select
              name="team"
              id="team"
              value={teamId}
              onChange={(e) => {
                setTeamId(e.target.value);
              }}
            >
              <option value={162}>FLUFF</option>
              <option value={161}>RUFF</option>
            </select>
          </label>
          <br />
          <br />
          <button id="submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
