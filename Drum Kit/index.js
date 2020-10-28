//document.querySelector("button").addEventListener("click", handleClick);

// document.querySelector("button").addEventListener("click", function() {
//   //something inside function that we want to happen on click, this is anyonymous function.
// });



//
// document.querySelector(".name-of-class").addEventListener("click", responseToClick);
//
// function responseToClick () {
//   console.log("I got clicked!");
// }

//detecting button presses
var no_bt = document.querySelectorAll(".drum").length;

for (var i = 0; i < no_bt; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //console.log(this.innerText);
    makeSound(this.innerText);
    buttonAnimation(this.innerText);
  });
}

//detecting mouse presses
document.addEventListener("keypress", function(event) {
  //console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
});

//detecting touches (kind of buggy now)* (not now)
document.addEventListener("touchstart", function(event) {
  //console.log(event.target.innerText);
  makeSound(event.target.innerText);
  buttonAnimation(event.target.innerText);

  event.preventDefault(); //event.preventDefault(); was added here to squash the bug*

}, {passive: false}); //, {passive: false} was added here to squash the bug*


//what to do when an event happens
function makeSound(key) {
  //console.log(key);
  //event.preventDefault();
  //console.log(event);
  // var ky = event.key;
  // var but = this.innerText;
  //console.log(ky, but);
  //var tch = event.target.innerText;
  //this.style.color = "pink"

  switch (key) {

    case "w":
      var aud = new Audio("sounds/crash.mp3");
      aud.play();
      break;

    case "a":
      var aud = new Audio("sounds/kick.mp3");
      aud.play();
      break;

    case "s":
      var aud = new Audio("sounds/snare.mp3");
      aud.play();
      break;

    case "d":
      var aud = new Audio("sounds/tom1.mp3");
      aud.play();
      break;

    case "j":
      var aud = new Audio("sounds/tom2.mp3");
      aud.play();
      break;

    case "k":
      var aud = new Audio("sounds/tom3.mp3");
      aud.play();
      break;

    case "l":
      var aud = new Audio("sounds/tom4.mp3");
      aud.play();
      break;

    default:
      console.log(key);

  }


  //if else instead of switch case
  //
  // if (but === "w") {
  //   var aud = new Audio("sounds/crash.mp3");
  //   // crash.muted = false;
  //   aud.play();
  // }
  //
  // else if (but === "s") {
  //   var aud = new Audio("sounds/kick.mp3");
  //   // crash.muted = false;
  //   aud.play();
  // }
  //
  // else if (but === "a") {
  //   var aud = new Audio("sounds/snare.mp3");
  //   // crash.muted = false;
  //   aud.play();
  // }
  //
  // else if (but === "d") {
  //   var aud = new Audio("sounds/tom1.mp3");
  //   // crash.muted = false;
  //   aud.play();
  // }
  //
  // else if (but === "j") {
  //   var aud = new Audio("sounds/tom2.mp3");
  //   // crash.muted = false;
  //   aud.play();
  // }
  //
  // else if (but === "k") {
  //   var aud = new Audio("sounds/tom3.mp3");
  //   // crash.muted = false;
  //   aud.play();
  // }
  //
  // else if (but === "l") {
  //   var aud = new Audio("sounds/tom4.mp3");
  //   // crash.muted = false;
  //   aud.play();
  // }
  // alert("I got clicked!");
}

//another call back function

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  document.querySelector("footer span").classList.add("roll");
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
    document.querySelector("footer span").classList.remove("roll");
  }, 200);
}

// var no_bt = document.querySelectorAll(".drum").length;
// for (var i = 0; i < no_bt ; i++) {
//   b = document.querySelectorAll(".drum")[i].addEventListener("click",
//   function (b) {
//     console.log(b);
//     alert("I got clicked!");
//     // console.log(i);
//     // document.querySelectorAll(".drum")[i].innerText = "a";
//   });
// }
