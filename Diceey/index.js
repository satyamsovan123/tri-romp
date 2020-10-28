var player1 = Math.ceil(Math.random() * 6);
var player2 = Math.ceil(Math.random() * 6);

console.log(player1,player2);

document.querySelector(".pl1 img").src = "images/dice" + player1 + ".png";
document.querySelector(".pl2 img").src = "images/dice" + player2 + ".png";

// document.querySelector(".pl2 .dc").innerHTML = "<img class='dc' src='images/dice" + "2" + ".png' title='Player 2 Dice' alt='player2-dice'>";

if (player1 > player2) {
  console.log(player1);
  document.querySelector("h1").innerHTML = "<i class='fas fa-trophy'></i> <span class='win'>Player 1</span> Wins !";

}
else if (player1 < player2) {
  console.log(player2);
  document.querySelector("h1").innerHTML = "<i class='fas fa-trophy'></i> <span class='win'>Player 2</span> Wins !";

}
else {
  console.log("Draw!");
  document.querySelector("h1").innerHTML = "<i class='far fa-sad-tear'></i> Dead heat !";

}


// document.querySelector("h1").innerHTML = "<h1>Dice<span class="e">e</span>y !</h1>";
