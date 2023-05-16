/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  document.getElementById("change-card").onclick = function() {
    const cardNumbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const suitType = ["♦", "♥", "♠", "♣"];

    let generateRandomNumber = () => {
      let randomCardValue =
        cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
      let randomSuit = suitType[Math.floor(Math.random() * suitType.length)];

      let topSuit = document.querySelector(".top-suit");
      topSuit.innerHTML = randomSuit;

      let randomValue = document.querySelector(".number");
      randomValue.innerHTML = randomCardValue;

      let bottomSuit = document.querySelector(".bottom-suit");
      bottomSuit.innerHTML = randomSuit;

      if (randomSuit === "♥" || randomSuit === "♦") {
        topSuit.classList.add("suit-color");
        bottomSuit.classList.add("suit-color");
      } else {
        topSuit.classList.remove("suit-color");
        bottomSuit.classList.remove("suit-color");
      }
    };

    generateRandomNumber();
  };
};
