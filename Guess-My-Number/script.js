"use strict";
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
let score = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);
let displayMessage = document.querySelector(".message");
let number = document.querySelector(".number");

// Random secret number generator
let secretNum = Math.trunc(Math.random() * 20) + 1;
number.textContent = secretNum;
// console.log(randomNum);

// score = 1;
// console.log(score);

checkBtn.addEventListener("click", function () {
    const inputGuess = Number(document.querySelector(".guess").value);
    console.log(typeof inputGuess);

    if (score < 1) {
        displayMessage.textContent = "You've lost the game";
        return;
    }

    if (!inputGuess) {
        displayMessage.textContent = "No number! Please input a number";
        return;
    }

    if (inputGuess === secretNum) {
        displayMessage.textContent = "Won";
    } else if (inputGuess > secretNum) {
        displayMessage.textContent = "Number is lower than this";
    } else if (inputGuess < secretNum) {
        displayMessage.textContent = "Number is higher than this";
    }
});
