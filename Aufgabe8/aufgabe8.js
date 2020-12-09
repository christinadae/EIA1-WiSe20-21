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
    playSample(button[1]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button2").addEventListener("click", function () {
    playSample(button[2]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button3").addEventListener("click", function () {
    playSample(button[3]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button4").addEventListener("click", function () {
    playSample(button[4]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button5").addEventListener("click", function () {
    playSample(button[5]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button6").addEventListener("click", function () {
    playSample(button[6]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button7").addEventListener("click", function () {
    playSample(button[7]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button8").addEventListener("click", function () {
    playSample(button[8]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button9").addEventListener("click", function () {
    playSample(button[9]);
});
// PlaySample Funktion
// tslint:disable-next-line: typedef
function playSample(x) {
    x.play();
}
// Array Beat
// tslint:disable-next-line: typedef
var sample = [];
sample[0] = new Audio("./assets/hihat.mp3");
sample[1] = new Audio("./assets/kick.mp3");
sample[2] = new Audio("./assets/snare.mp3");
// tslint:disable-next-line: typedef
var index = 0;
var intervall;
var record;
// tslint:disable-next-line: typedef
var x = 0;
// Variablen Definition für die Buttons
var play = document.getElementById("playButton");
var stoppen = document.getElementById("stopButton");
var aufnehmen = document.getElementById("recordButton");
var aufnehmenstopp = document.getElementById("whileRecord");
var löschen = document.getElementById("deleteButton");
// Bei Klick auf StopButton wird der aktuelle Beat pausiert
stoppen.addEventListener("click", function () {
    clearInterval(intervall);
});
// Event-Listener für PlayButton
play.addEventListener("click", function () {
    PlayBeat(true);
    this.classList.add("is-hidden");
    stoppen.classList.remove("is-hidden");
});
// Klick auf PlayButton wird zu StopButton und andersrum
stoppen.addEventListener("click", function () {
    PlayBeat(false);
    this.classList.add("is-hidden");
    play.classList.remove("is-hidden");
});
function playstop(first, second) {
    first.classList.add(".is-hidden");
    second.classList.remove(".is-hiden");
}
// Klick auf RecordButton
aufnehmen.addEventListener("click", function () {
    this.classList.add("is-hidden");
    aufnehmenstopp.classList.remove("is-hidden");
    recordBeat();
});
aufnehmenstopp.addEventListener("click", function () {
    this.classList.add("is-hidden");
    aufnehmen.classList.remove("is-hidden");
});
// Funktion PlayStop
// tslint:disable-next-line: typedef
function PlayBeat(a) {
    if (a == true) {
        // tslint:disable-next-line: typedef
        intervall = setInterval(function () {
            if (x < sample.length) {
                playSample(sample[x]);
                x++;
            }
            else {
                x = 0;
            }
        }, 600);
    }
    else {
        clearInterval(intervall);
    }
}
// Funktion fürs Löschen
löschen.addEventListener("click", function () {
    deleteBeat();
});
// tslint:disable-next-line: typedef
function deleteBeat() {
    sample.splice(0, sample.length);
}
// Funktion fürs Aufnehmen
// tslint:disable-next-line: typedef
function recordBeat() {
    sample.push();
}
//# sourceMappingURL=aufgabe8.js.map