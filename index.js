function SoundsActive(name, assets) {
  document.querySelector(name).addEventListener("click", function () {
    var audio = new Audio("sounds/" + assets + ".mp3");
    audio.play();
    document.querySelector(name).classList.add("pressed");
    setTimeout(function () {
      document.querySelector(name).classList.remove("pressed");
    }, 100);
  });
}

SoundsActive(".w", "tom-1");
SoundsActive(".a", "tom-2");
SoundsActive(".s", "tom-3");
SoundsActive(".d", "tom-4");
SoundsActive(".j", "snare");
SoundsActive(".k", "kick-bass");
SoundsActive(".l", "crash");

function SoundsActiveNoClicks(name, assets) {
  var audio = new Audio("sounds/" + assets + ".mp3");
  audio.play();
}

document.addEventListener("keypress", function (event) {
  console.log(event);
  var number = event.key;
  ButtonActive(number);
  switch (number) {
    case "w":
      SoundsActiveNoClicks(".w", "tom-1");
      break;
    case "a":
      SoundsActiveNoClicks(".a", "tom-2");
      break;
    case "s":
      SoundsActiveNoClicks(".s", "tom-3");
      break;
    case "d":
      SoundsActiveNoClicks(".d", "tom-4");
      break;
    case "j":
      SoundsActiveNoClicks(".j", "snare");
      break;
    case "k":
      SoundsActiveNoClicks(".k", "kick-bass");
      break;
    case "l":
      SoundsActiveNoClicks(".l", "crash");
      break;
  }
});

function ButtonActive(keycurrent) {
  var ActiveButton = document.querySelector("." + keycurrent);
  ActiveButton.classList.add("pressed");
  setTimeout(function () {
    ActiveButton.classList.remove("pressed");
  }, 100);
}
