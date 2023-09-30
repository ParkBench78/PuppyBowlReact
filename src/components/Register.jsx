// Register.jsx component
import { useEffect, useState } from "react";
import "../App.css";
import { APIURL } from "./PlayerList.jsx";

export default function Register() {
  const [player, setPlayer] = useState(null);
  const form = document.getElementById("frmMain");

  const setUpForm = () => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const playerToAdd = {
        name: form.elements["dogName"].value,
        breed: form.elements["breedName"].value,

        imageUrl: "https://en.pimg.jp/082/636/994/1/82636994.jpg",
      };

      await addNewPlayer(playerToAdd);
    });
  };
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

  return (
    <div>
      {console.log("The NewPlayerForm component")}
      <h4>New Player Form to add a player</h4>
      <form id="frmMain">
        <div className="containers">
          <label htmlFor="dogName">Name</label>
          <input
            type="text"
            id="dogName"
            name="dogName"
            placeholder="Dog's Name"
          />
          <br />
        </div>
        <div className="name">
          <label htmlFor="breedName">Breed</label>
          <input
            type="text"
            id="breedName"
            name="breedName"
            placeholder="Dog Breed"
            //Add team & status radio buttons
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
