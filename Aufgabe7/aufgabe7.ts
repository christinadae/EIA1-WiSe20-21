// Array Buttons
var button = [];
button [1] = new Audio('./assets/A.mp3'); 
button [2] = new Audio('./assets/C.mp3'); 
button [3] = new Audio('./assets/F.mp3'); 
button [4] = new Audio('./assets/G.mp3'); 
button [5] = new Audio('./assets/hihat.mp3'); 
button [6] = new Audio('./assets/kick.mp3'); 
button [7] = new Audio('./assets/laugh-1.mp3'); 
button [8] = new Audio('./assets/laugh-2.mp3'); 
button [9] = new Audio('./assets/snare.mp3'); 

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

// PlaySample Funktion
function playSample(a) {
button[a].play();
};




    

// Array Beat
var Beat = [];
Beat [2] = new Audio('./assets/kick.mp3');
Beat [1] = new Audio('./assets/hihat.mp3'); 
Beat [3] = new Audio('./assets/snare.mp3'); 
Beat [4] = new Audio('./assets/A.mp3'); 



document.querySelector(".PlayButton").addEventListener("click", function() {
    DrumMaschine();
});  
//PlayButton Funktion
function DrumMaschine () {
setInterval(function () {
Beat [3].play(); 
Beat [2].play();
Beat [4].play();
Beat [1].play();



}, 500);}



