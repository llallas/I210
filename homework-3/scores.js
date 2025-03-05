let scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];

let ul = document.getElementById("score-list");

let averageParagraph = document.getElementById("average-score");

let total = 0;

for (var i = 0; i < scores.length; i++) {
  var li = document.createElement("li");
  li.innerText = scores[i];
  ul.appendChild(li);
  total += scores[i];
}

let average = total / scores.length;

averageParagraph.innerText = "Average score: " + average;
