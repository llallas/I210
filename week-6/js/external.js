console.log("Umm.. where are we?");

const birthYear = 1996;

let myName = "Sara";

console.log("My name is " + myName + " and I was born in " + birthYear);

myName = "Sally";

// birthYear = 1997;

console.log(myName, "May have devoured 10 souls.");

console.log("My name is ", myName.length, " characters long.");

console.log("myName includes sally", myName.toUpperCase().includes("sally"));

console.log("myName has Uppercase:", myName !== myName.toLowerCase());

console.log("myName has Lowercase:", myName !== myName.toUpperCase());

const PI = 3.14;

console.log("$" + PI.toFixed(2));

const randomNum = Math.floor(Math.random() * 100) + 1;

console.log("Random number between 0 and 100:", randomNum);
