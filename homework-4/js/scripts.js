function startStory() {
  let story = document.getElementById("story");
  story.innerText =
    "You are in a dark forest. You see two paths. Do you go left or right?";
  document.body.innerHTML +=
    "<button onclick=\"choosePath('left')\">Go Left</button>";
  document.body.innerHTML +=
    "<button onclick=\"choosePath('right')\">Go Right</button>";
}

function choosePath(direction) {
  let story = document.getElementById("story");
  if (direction === "left") {
    story.innerText =
      "You find a friendly wizard who offers you gold or a magic spell. What do you choose?";
    document.body.innerHTML +=
      '<button onclick="chooseGold()">Accept Gold</button>';
    document.body.innerHTML +=
      '<button onclick="chooseSpell()">Ask for a Spell</button>';
  } else {
    story.innerText =
      "You encounter a hungry bear. Do you run away or try to befriend it?";
    document.body.innerHTML += '<button onclick="runAway()">Run Away</button>';
    document.body.innerHTML +=
      '<button onclick="befriendBear()">Befriend the Bear</button>';
  }
}

function chooseGold() {
  let cursed = confirm(
    "The wizard hesitates before giving you the gold. Are you sure you want to take it?"
  );
  if (cursed) {
    document.getElementById("story").innerText =
      "The gold was cursed! You turn into a statue. The end!";
  } else {
    document.getElementById("story").innerText =
      "You wisely refuse the gold. The wizard instead gives you a powerful healing potion. You continue your journey. The end!";
  }
}

function chooseSpell() {
  let spellChoice = prompt(
    "The wizard offers you two spells: 'Teleport' or 'Fireball'. Which one do you choose?"
  );
  if (spellChoice.toLowerCase() === "teleport") {
    document.getElementById("story").innerText =
      "You teleport out of the forest safely. The end!";
  } else if (spellChoice.toLowerCase() === "fireball") {
    document.getElementById("story").innerText =
      "You blast the trees with a fireball, revealing a hidden treasure. The end!";
  } else {
    document.getElementById("story").innerText =
      "The wizard is confused by your choice and disappears. The end!";
  }
}

function runAway() {
  document.getElementById("story").innerText =
    "You escape safely, but you'll always wonder what could have happened. The end!";
}

function befriendBear() {
  document.getElementById("story").innerText =
    "The bear becomes your friend and helps you find food. You survive in the forest happily. The end!";
}
