

var randomNum1 = Math.floor(Math.random() * 6) + 1; //1-6


// create a variable to hold the random image

var randomImg = "dice" + randomNum1 + ".png";

//Image source 

var imageSource1 = "images/" + randomImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var imageSource2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }