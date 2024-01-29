function SoundsActive(name, assets) {
  document.querySelector(name).addEventListener("click", function () {
    var audio = new Audio("sounds/" + assets + ".mp3");
    audio.play();
  });
}

SoundsActive(".w", "tom-1");
SoundsActive(".a", "tom-2");
SoundsActive(".s", "tom-3");
SoundsActive(".d", "tom-4");
SoundsActive(".j", "snare");
SoundsActive(".k", "kick-bass");
SoundsActive(".l", "crash");
