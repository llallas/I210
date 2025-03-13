console.log("Pokemon!");

function showAlert() {
  alert("Annoying Message");
}

const confirmBtnRef = document.querySelector("#confirm-btn");

function showConfirm() {
  const userConfirmed = confirm("You are robot, right?");

  console.log(userConfirmed);
}

confirmBtnRef.onclick = showConfirm;

function showPrompt() {
  const userInput = prompt("What is your favorite flavore of Ice Cream?");

  console.log(userInput);
}

// Code for Pokemon Journey

const journeyRef = document.querySelector("#journey");

function startJourney() {
  journeyRef.innerHTML =
    "<p> You are so excited, today you get your first Pokemon! Sitting infront of you are three pokeballs for Bulbasaur, Charmander, and Squirtle. Which one do you choose? </p>";

  const starterPokemon = [
    {
      name: "Bulbasaur",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
    },
    {
      name: "Charmander",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
    },
    {
      name: "Squirtle",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
    },
  ];

  for (let i = 0; i < starterPokemon.length; i++) {
    const pokemon = starterPokemon[i];
    const newSection = document.createElement("section");
    newSection.innerHTML +=
      "<img height='100' src='" +
      pokemon.img +
      "' alt='" +
      pokemon.name +
      "'/>";
    newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

    newSection.dataset.pokemonName = pokemon.name;
    newSection.dataset.pokemonImage = pokemon.img;
    newSection.onclick = choosePokemon;

    journeyRef.appendChild(newSection);
    console.log(pokemon);
  }
}

function choosePokemon(e) {
  console.log(e.currentTarget);
  const pokemonName = e.currentTarget.dataset.pokemonName;
  const pokemonImg = e.currentTarget.dataset.pokemonImage;

  const confirmChoice = confirm(
    "You choose " + pokemonName + " as your starter Pokemon. Are you sure?"
  );
  if (confirmChoice) {
    journeyRef.innerHTML =
      "<p> Congratulations! You have chosen " +
      pokemonName +
      " as your starter Pokemon! </p>";
    journeyRef.innerHTML +=
      "<img height='200' src='" + pokemonImg + "' alt='" + pokemonName + "'/>";
  }
}
