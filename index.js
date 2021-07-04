const randomNumber = Math.floor(Math.random() * 6) + 1;

const randomImage = "dice" + randomNumber + ".png";
const randomSource = "images/" + randomImage;
const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSource);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomImage2 = "dice" + randomNumber2 + ".png";
const randomSource2 = "images/" + randomImage2;
const image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSource2);

if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerText = "Player1 Wins!";
} else if (randomNumber2 > randomNumber) {
  document.querySelector("h1").innerText = "Player2 Wins!"
} else if (randomNumber === randomNumber2) {
  document.querySelector("h1").innerText = "Draw!";
}