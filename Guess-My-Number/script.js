"use strict";
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
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

    if (score < 1) {
        displayMessage.textContent = "You've lost the game";
        return;
    }

    if (!inputGuess) {
        displayMessage.textContent = "No number! Please input a valid number";
        return;
    }

    if (inputGuess === secretNum) {
        displayMessage.textContent = "You've won the match";
        highScore.textContent = score.textContent;
        document.body.style.backgroundColor = "#60b347";
        number.style.width = "30rem";
    } else if (inputGuess > secretNum) {
        displayMessage.textContent = "Number is lower than this";
        score.textContent--;
        score.textContent = score.textContent--;
    } else if (inputGuess < secretNum) {
        displayMessage.textContent = "Number is higher than this";
        score.textContent--;
        score.textContent = score.textContent--;
    }
});
