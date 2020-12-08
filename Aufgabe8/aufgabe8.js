// Array Buttons
// tslint:disable-next-line: typedef
var button = [];
button[1] = new Audio("./assets/A.mp3");
button[2] = new Audio("./assets/C.mp3");
button[3] = new Audio("./assets/F.mp3");
button[4] = new Audio("./assets/G.mp3");
button[5] = new Audio("./assets/hihat.mp3");
button[6] = new Audio("./assets/kick.mp3");
button[7] = new Audio("./assets/laugh-1.mp3");
button[8] = new Audio("./assets/laugh-2.mp3");
button[9] = new Audio("./assets/snare.mp3");
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
function playSample(a) {
    button[a].play();
}
// Array Beat
// tslint:disable-next-line: variable-name
// tslint:disable-next-line: typedef
var sample = [];
sample[0] = new Audio("./assets/kick.mp3");
sample[1] = new Audio("./assets/snare.mp3");
sample[2] = new Audio("./assets/hihat.mp3");
sample[3] = new Audio("./assets/laugh-2.mp3");
var index = 0;
// Event-Listener für PlayButton
document.getElementById("playButton").addEventListener("click", function () {
    // tslint:disable-next-line: typedef
    setInterval(function () {
        for (var index = 0; index <= sample.length; index++) {
            sample[index].play();
        }
    }, 600);
});
var play = document.getElementById("playButton");
var stoppen = document.getElementById("stopButton");
play.addEventListener("click", function () {
    this.classList.add("is-hidden");
    stoppen.classList.remove("is-hidden");
});
stoppen.addEventListener("click", function () {
    this.classList.add("is-hidden");
    play.classList.remove("is-hidden");
});
function playstop(first, second) {
    first.classList.add(".is-hidden");
    second.classList.remove(".is-hiden");
}
//# sourceMappingURL=aufgabe8.js.map