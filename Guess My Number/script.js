"use strict";

const againButton = document.querySelector(".again");
const rightNumber = document.querySelector(".number");
const tryNumber = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const giveHint = document.querySelector(".message");
const currentScore = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const body = document.querySelector("body");
let score = 20;
let highscore = 0;
let numberToGuess = Math.trunc(getRandomArbitrary(1, 20));

function getRandomArbitrary(min, max) {
  return Math.random() * max + min;
}

const displayMessage = function (message) {
  giveHint.innerText = message;
};

const winDisplay = function () {
  body.style.backgroundColor = "#00b300";
  rightNumber.style.width = "40rem";
  displayMessage("Are you a mentalist ? Go grab a beer ! You're right ! 🎉🥂");
};

const updateHighScore = function (score) {
  highscore = score > highscore ? score : highscore;
  highScore.innerText = highscore;
};

const reset = function () {
  numberToGuess = Math.trunc(getRandomArbitrary(1, 20));
  score = 20;
  currentScore.innerText = score;
  giveHint.innerText = "Don't be scared, start guessing ... 🤗";
  rightNumber.innerText = "?";
  tryNumber.value = "";
  body.style.backgroundColor = "#222";
  rightNumber.style.width = "15rem";
};

const checkNumber = function (number) {
  if (!number) {
    displayMessage("Enter a number ! Geez, I almost retreated a point 🤬");
  } else if (number == numberToGuess) {
    rightNumber.innerText = numberToGuess;
    winDisplay();
    updateHighScore(score);
  } else if (number < 1 || number > 20) {
    displayMessage("It's a number between 1 and 20 sir 👺");
  } else if (score === 0) {
    return;
  } else if (score <= 1 && number != numberToGuess) {
    score--;
    currentScore.innerText = score;
    displayMessage("You lost 💥");
  } else {
    score--;
    currentScore.innerText = score;
    displayMessage(
      number > numberToGuess
        ? "Your number is too high ... 🥱"
        : "Your number is too low ... 😪"
    );
  }
};

checkButton.addEventListener("click", (e) => {
  checkNumber(tryNumber.value);
});

againButton.addEventListener("click", (e) => {
  reset();
});
