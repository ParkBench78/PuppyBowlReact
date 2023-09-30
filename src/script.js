//script.js

const playerContainer = document.getElementById("all-players-container");
const newPlayerFormContainer = document.getElementById("new-player-form");

// Added cohort name to the cohortName variable below
const cohortName = "2306-FTB-ET-WEB-PT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

/*
 It fetches all players from the API and returns them
 as an array of objects.
 */
export async function fetchAllPlayers() {
  try {
    const response = await fetch(APIURL);
    const results = await response.json();
    console.log(results.data.players);

    return results.data.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
}
//get single player by id
const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/${playerId}`);
    const player = await response.json();
    return player;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

//add new player
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
//delete player
const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/${playerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};
//render a single player by id
const renderSinglePlayerById = async (playerId) => {
  try {
    const player = await getPlayerById(playerId);
    const playerDetailsElement = document.createElement("div");
    //It takes an array of player objects, loops through them, and creates a string of HTML for each player
    playerDetailsElement.classList.add(player - details);
    //then adds that string to a larger string of HTML that represents all the players
    playerDetailsElement.innerHTML = `
            <h2>${player.name}</h2>
            <p>Breed: ${player.breed}</p>
            <p>Status: ${player.status}</p>
            <p>${player.imageUrl}</p>
            <p>Entered: ${player.createdAt}</p>
            <p>Updated: ${player.updatedAt}</p>
            <p>Team ID: ${player.teamId}</p>
            <p>Cohort ID: ${player.cohortId}</p>
        `;
    //Then it takes that larger string of HTML and adds it to the DOM.
    playerContainer.appendChild(playerDetailsElement);
  } catch (err) {
    console.error("Whoops, trouble rendering player details!");
  }
};

function createPlayerCard(player) {
  const playerElement = document.createElement("div");
  const playerSubElement = document.createElement("div");

  const name = document.createElement("h3");
  name.innerHTML = player.name;
  playerSubElement.appendChild(name);

  const breed = document.createElement("h4");
  breed.innerHTML = `Breed: ${player.breed}`;
  playerSubElement.appendChild(breed);

  const dogId = document.createElement("h6");
  dogId.innerHTML = `ID: ${player.id}`;
  const teamName = document.createElement("h6");
  teamName.innerHTML = `Team: ${player.teamId === 161 ? "Ruff" : "Fluff"}`;

  const detailButton = document.createElement("button");
  player.isShowingDetails = false;
  detailButton.innerHTML = player.isShowingDetails
    ? "Hide Details"
    : "Show Details";

  detailButton.addEventListener("click", () => {
    if (player.isShowingDetails === true) {
      player.isShowingDetails = false;
      playerSubElement.removeChild(dogId);
      playerSubElement.removeChild(teamName);
    } else {
      player.isShowingDetails = true;
      playerSubElement.appendChild(dogId);
      playerSubElement.appendChild(teamName);
    }
    detailButton.innerHTML = player.isShowingDetails
      ? "Hide Details"
      : "Show Details";
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  deleteButton.addEventListener("click", async () => {
    console.log(`Deleting Player ID: ${player.id}`);
    await removePlayer(player.id);
    const players = await fetchAllPlayers();
    renderAllPlayerCards(players);
  });

  const image = document.createElement("img");
  image.setAttribute("src", player.imageUrl);
  image.className = "image";

  playerSubElement.appendChild(deleteButton);
  playerSubElement.appendChild(detailButton);
  playerElement.appendChild(playerSubElement);
  playerElement.appendChild(image);

  playerElement.className = "card";
  return playerElement;
}

export async function renderAllPlayerCards(players) {
  const playerContainer = document.getElementById("all-players-container");
  if (players) {
    players.forEach((player) => {
      const card = createPlayerCard(player);
      playerContainer.appendChild(card);
    });
  }
}

export const renderAllPlayers = async (players) => {
  try {
    const playerContainer = document.getElementById("all-players-container");
    if (players) {
      // playerContainer.innerHTML = "";
      players.forEach((player) => {
        const playerElement = document.createElement("div");
        // playerElement.innerHTML = player.name;
        playerElement.classList.add("player");
        playerElement.innerHTML = `
        <h4>${player.name}</h4>
        <p>Breed: ${player.breed}</p>
        <p>${player.imageUrl}</p>

        <button class="details-button" data-id='${player.id}'>See Details</button>
        
        <button class='remove-button' data-id='${player.id}'>Remove from Roster</button>
        `;
        playerContainer.appendChild(playerElement);
      });
    }
  } catch (err) {
    console.error("Uh oh, trouble rendering players!", err);
  }
};

/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
  try {
  } catch (err) {
    console.error("Uh oh, trouble rendering the new player form!", err);
  }
};

const init = async () => {
  const players = await fetchAllPlayers();
  console.log(players);
  renderAllPlayers(players);
  renderAllPlayerCards(players);
};
