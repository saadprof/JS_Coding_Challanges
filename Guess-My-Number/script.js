"use strict";
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
let score = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);
let displayMessage = document.querySelector(".message");

// Random number generator
let randomNum = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNum);

// score = 1;
// console.log(score);

checkBtn.addEventListener("click", function () {
    const inputGuess = document.querySelector(".guess").value;

    if (score < 1) {
        displayMessage.textContent = "You've lost the game";
        return;
    }

    if(!inputGuess){
        displayMessage.textContent = "No number! Please input a number"
        return;
    } 
});
