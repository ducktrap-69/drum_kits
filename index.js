for (let i = 0; i < 7; i++) {
  document.getElementsByTagName("button")[i].addEventListener("click", function() {
    var pressedButton = this.textContent;
    makeSound(pressedButton);
    animation(pressedButton);
  });
}

document.addEventListener("keypress", function() {
  var keypress = event.key;
  makeSound(keypress);
  animation(keypress);
});

function animation(kp) {
  var activebutton = document.querySelector("." + kp)

  activebutton.classList.add("pressed");

  setTimeout(function() {
    activebutton.classList.remove("pressed");
  }, 100);


}

function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    default:

  }

}
