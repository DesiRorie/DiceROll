function reload() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);

  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;

  var image1 = document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

  var image2 = document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
    document.getElementById("new").textContent = "Player 1 wins";
  } else if (randomNumber2 == randomNumber1) {
    document.getElementById("new").textContent = "Tie!";
  } else {
    document.getElementById("new").textContent = "Player 2 wins";
  }
}
