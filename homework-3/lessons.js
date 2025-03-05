const instruments = [
  "Piano",
  "Guitar",
  "Violin",
  "Drums",
  "Saxophone",
  "Flute",
];

let ul = document.getElementById("instrument-list");

for (var i = 0; i < instruments.length; i++) {
  var li = document.createElement("li");
  li.innerText = instruments[i]; //
  ul.appendChild(li);
}
