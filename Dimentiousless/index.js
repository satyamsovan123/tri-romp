var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChoosenPattern = [];
var level = 0;
var started = false;

$(document).on("keypress", function(event) {
  // console.log(event.key);
  if(started === false) {
    nextSequence();
    $("#wlcm").fadeOut();
    started = true;
    // console.log($("#level-title")[0].innerText);
    $("#level-title").text("Level " + level);
  }
  if(event.key == "g" || event.key == "G") {
    $("footer").text("OG!!");
    console.log("Thanks for checking this Easter Egg!");
    $("footer").addClass("g");
    setTimeout(function() {
      $("footer").removeClass("g");
    }, 250);
    setTimeout(function() {
      $("footer").text("G for Genius.")
    }, 250);
    //nextSequence(); //cheat-code don't enable it. 😂
  }
});

$(".btn").on("click", function(event){
  var userChoosenColor = this.id;
  animatePress(userChoosenColor);
  playSound(userChoosenColor);
  userChoosenPattern.push(userChoosenColor);
  checkAnswer(userChoosenPattern.length - 1);

  console.log(userChoosenPattern);
});

function nextSequence() {
  userChoosenPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColor = buttonColors[randomNumber];
  $("#" + randomChoosenColor).addClass("flash");
  gamePattern.push(randomChoosenColor);

  level = level + 1;
  $("#level-title").text("Level " + level);

  playSound(randomChoosenColor);

}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.muted = false;
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userChoosenPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Success");
    if(userChoosenPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);

    }
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press any key to restart.");
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
