var sound1:HTMLAudioElement = new Audio('A.mp3');
sound1.play();

var sound2:HTMLAudioElement = new Audio('C.mp3');
sound2.play();

var sound3:HTMLAudioElement = new Audio('F.mp3');
sound3.play();

var sound4:HTMLAudioElement = new Audio('G.mp3');
sound4.play();

var sound5:HTMLAudioElement = new Audio('hihat.mp3');
sound5.play();

var sound6:HTMLAudioElement = new Audio('kick.mp3');
sound6.play();

var sound7:HTMLAudioElement = new Audio('laugh-1.mp3');
sound7.play();

var sound8:HTMLAudioElement = new Audio('laugh-2.mp3');
sound8.play();

var sound9:HTMLAudioElement = new Audio('snare.mp3');
sound9.play();

function playSample () {
  sound.play(); 

  document.querySelector(".button1").addEventListener("click", function () {
    playSample(sound);
});


}
document.querySelector(".button1").addEventListener("click", function () {
    playSample(1)
});

document.querySelector(".button2").addEventListener("click", function () {
    playSample(sound2)
});

document.querySelector(".button3").addEventListener("click", function () {
    playSample(sound3)
});

document.querySelector(".button4").addEventListener("click", function () {
    playSample(sound4)
});

document.querySelector(".button5").addEventListener("click", function () {
    playSample(sound5)
});

document.querySelector(".button6").addEventListener("click", function () {
    playSample(sound6)
});

document.querySelector(".button7").addEventListener("click", function () {
    playSample(sound7)
});

document.querySelector(".button8").addEventListener("click", function () {
    playSample(sound8)
});

document.querySelector(".button9").addEventListener("click", function () {
    playSample(sound9)
});