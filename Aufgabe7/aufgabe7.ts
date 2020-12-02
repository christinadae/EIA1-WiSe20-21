var sound = [];
sound [1] = new Audio('./assets/A.mp3'); 
sound [2] = new Audio('./assets/C.mp3'); 
sound [3] = new Audio('./assets/F.mp3'); 
sound [4] = new Audio('./assets/G.mp3'); 
sound [5] = new Audio('./assets/hihat.mp3'); 
sound [6] = new Audio('./assets/kick.mp3'); 
sound [7] = new Audio('./assets/laugh-1.mp3'); 
sound [8] = new Audio('./assets/laugh-2.mp3'); 
sound [9] = new Audio('./assets/snare.mp3'); 

// Event-Listener für Sounds

document.querySelector(".button1").addEventListener("click", function () {
    playSample(1);
});

document.querySelector(".button2").addEventListener("click", function () {
    playSample(2);
});

document.querySelector(".button3").addEventListener("click", function () {
    playSample(3);
});

document.querySelector(".button4").addEventListener("click", function () {
    playSample(4);
});

document.querySelector(".button5").addEventListener("click", function () {
    playSample(5);
});

document.querySelector(".button6").addEventListener("click", function () {
    playSample(6);
});

document.querySelector(".button7").addEventListener("click", function () {
    playSample(7);
});

document.querySelector(".button8").addEventListener("click", function () {
    playSample(8);
});

document.querySelector(".button9").addEventListener("click", function () {
    playSample(9);
});

// PlaySample Function
  function playSample(b) {
    sound[b].play();
  };