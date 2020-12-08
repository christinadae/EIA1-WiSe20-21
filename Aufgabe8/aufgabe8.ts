// Array Buttons
// tslint:disable-next-line: typedef
var button = [];
button [1] = new Audio("./assets/A.mp3"); 
button [2] = new Audio("./assets/C.mp3"); 
button [3] = new Audio("./assets/F.mp3"); 
button [4] = new Audio("./assets/G.mp3"); 
button [5] = new Audio("./assets/hihat.mp3"); 
button [6] = new Audio("./assets/kick.mp3"); 
button [7] = new Audio("./assets/laugh-1.mp3"); 
button [8] = new Audio("./assets/laugh-2.mp3"); 
button [9] = new Audio("./assets/snare.mp3"); 

// Event-Listener für Sounds
// tslint:disable-next-line: typedef
document.querySelector(".button1").addEventListener("click", function () {
    playSample(1);
});

// tslint:disable-next-line: typedef
document.querySelector(".button2").addEventListener("click", function () {
    playSample(2);
});

// tslint:disable-next-line: typedef
document.querySelector(".button3").addEventListener("click", function () {
    playSample(3);
});

// tslint:disable-next-line: typedef
document.querySelector(".button4").addEventListener("click", function () {
    playSample(4);
});

// tslint:disable-next-line: typedef
document.querySelector(".button5").addEventListener("click", function () {
    playSample(5);
});

// tslint:disable-next-line: typedef
document.querySelector(".button6").addEventListener("click", function () {
    playSample(6);
});

// tslint:disable-next-line: typedef
document.querySelector(".button7").addEventListener("click", function () {
    playSample(7);
});

// tslint:disable-next-line: typedef
document.querySelector(".button8").addEventListener("click", function () {
    playSample(8);
});

// tslint:disable-next-line: typedef
document.querySelector(".button9").addEventListener("click", function () {
    playSample(9);
});

// PlaySample Funktion
// tslint:disable-next-line: typedef
function playSample (a: string | number) {
    button[a].play();
    }

// Array Beat

// tslint:disable-next-line: variable-name
// tslint:disable-next-line: typedef
var sample = [];

sample [0] = new Audio("./assets/kick.mp3");
sample [1] = new Audio("./assets/snare.mp3");
sample [2] = new Audio("./assets/hihat.mp3"); 
sample [3] = new Audio("./assets/laugh-2.mp3"); 


var index: number = 0;
var intervall: number; 

const play: HTMLElement = document.getElementById("playButton");
const stoppen: HTMLElement = document.getElementById("stopButton");

// Event-Listener für StopButton
stoppen.addEventListener("click", function(): void {
clearInterval(intervall);

});
// Event-Listener für PlayButton
play.addEventListener("click", function (): void {
    // tslint:disable-next-line: typedef
    intervall = setInterval(function () {
        for (var index: number = 0; index <= sample.length; index++) {
           sample[index].play();
        }
    },                      600);

});


// Funktion und Eventlistener für Play/Stop Button

play.addEventListener("click", function (): void {
this.classList.add("is-hidden");
stoppen.classList.remove("is-hidden");
});

stoppen.addEventListener("click", function (): void {
    this.classList.add("is-hidden");
    play.classList.remove("is-hidden");
});

function playstop(first: HTMLElement, second: HTMLElement): void {
first.classList.add(".is-hidden");
second.classList.remove(".is-hiden");
}







