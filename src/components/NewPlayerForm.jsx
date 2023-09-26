//The NewPlayerForm component
// Added cohort name to the cohortName variable below
const cohortName = "2306-FTB-ET-WEB-PT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

import { useEffect, useState } from "react";

function NewPlayerForm() {
  const [player, setPlayer] = useState(null);
  const form = document.getElementById("frmMain");
  // useEffect(() => {
  //   setUpForm();
  //   console.log("Added an eventListener for form submit");
  // }, []);
  const setUpForm = () => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const playerToAdd = {
        name: form.elements["dogName"].value,
        breed: form.elements["breedName"].value,
        // status: form.elements["status"].value,
        imageUrl: "https://en.pimg.jp/082/636/994/1/82636994.jpg",
        // teamId: form.elements["team"].value,
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
        <div className="container">
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
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default NewPlayerForm;
