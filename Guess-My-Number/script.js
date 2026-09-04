"use strict";
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const score = Number(document.querySelector(".score").textContent);
const highScore = Number(document.querySelector(".highscore").textContent);

// Random number generator
let randomNum = (Math.trunc(Math.random() * 20) + 1);
console.log(randomNum);

checkBtn.addEventListener("click", function () {
    const inputGuess = document.querySelector(".guess").value;
});
