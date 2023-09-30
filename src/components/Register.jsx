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
    console.log(result);
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

export default function Register() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [teamId, setTeamId] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();

    alert(`NAME: ${name}, BREED: ${breed}, STATUS: ${status}, TEAM: ${teamId}`);
    setName("");
    setBreed("");
    setStatus("");
    setTeamId(0);

    const player = {
      name: name,
      breed: breed,
      status: status,
      teamId: teamId,
      imageUrl:
        "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-3_1562-692.jpg",
    };
    await addNewPlayer(player);
  }
  return (
    <div>
      <h2>Register Here</h2>
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
        <select
          name="status"
          id="status"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option value="">Status...</option>
          <option value="bench">Bench</option>
          <option value="field">Field</option>
        </select>
        <br />
        <select
          name="team"
          id="team"
          value={teamId}
          onChange={(e) => {
            setTeamId(e.target.value);
          }}
        >
          <option value={0}>Team...</option>
          <option value={162}>FLUFF</option>
          <option value={161}>RUFF</option>
        </select>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

//   const [player, setPlayer] = useState(null);
//   const form = document.getElementById("frmMain");

//   const setUpForm = () => {
//     form.addEventListener("submit", async (event) => {
//       event.preventDefault();
//       const playerToAdd = {
//         name: form.elements["dogName"].value,
//         breed: form.elements["breedName"].value,

//         imageUrl: "https://en.pimg.jp/082/636/994/1/82636994.jpg",
//       };

//       await addNewPlayer(playerToAdd);
//     });
//   };
//   const addNewPlayer = async (player) => {
//     try {
//       const response = await fetch(APIURL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(player),
//       });
//       const result = await response.json();
//       console.log(result);
//     } catch (err) {
//       console.error("Oops, something went wrong with adding that player!", err);
//     }
//   };

//   return (
//     <div>
//       {console.log("The NewPlayerForm component")}
//       <h4>New Player Form to add a player</h4>
//       <form id="frmMain">
//         <div className="containers">
//           <label htmlFor="dogName">Name</label>
//           <input
//             type="text"
//             id="dogName"
//             name="dogName"
//             placeholder="Dog's Name"
//           />
//           <br />
//         </div>
//         <div className="name">
//           <label htmlFor="breedName">Breed</label>
//           <input
//             type="text"
//             id="breedName"
//             name="breedName"
//             placeholder="Dog Breed"
//             //Add team & status radio buttons
//           />
//         </div>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }
