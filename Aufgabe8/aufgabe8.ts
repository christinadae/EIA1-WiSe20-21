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
    playSample(button[1]);
    recordBeat(button[1]);
    
});
// tslint:disable-next-line: typedef
document.querySelector(".button2").addEventListener("click", function () {
    playSample(button[2]);
    recordBeat(button[2]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button3").addEventListener("click", function () {
    playSample(button[3]);
    recordBeat(button[3]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button4").addEventListener("click", function () {
    playSample(button[4]);
    recordBeat(button[4]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button5").addEventListener("click", function () {
    playSample(button[5]);
    recordBeat(button[5]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button6").addEventListener("click", function () {
    playSample(button[6]);
    recordBeat(button[6]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button7").addEventListener("click", function () {
    playSample(button[7]);
    recordBeat(button[7]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button8").addEventListener("click", function () {
    playSample(button[8]);
    recordBeat(button[8]);
});
// tslint:disable-next-line: typedef
document.querySelector(".button9").addEventListener("click", function () {
    playSample(button[9]);
    recordBeat(button[9]);
});

// PlaySample Funktion

// tslint:disable-next-line: typedef
function playSample (x) {
x.play();
}

// Array für den Beat

// tslint:disable-next-line: typedef
var sample  = [];
sample [0] = new Audio("./assets/hihat.mp3"); 
sample [1] = new Audio("./assets/kick.mp3"); 
sample [2] = new Audio("./assets/snare.mp3"); 

// Alle Variablen

// tslint:disable-next-line: typedef
var recordactive; 
var intervall: number; 
// tslint:disable-next-line: typedef
var x = 0; 


// Variablen Definition für die Buttons

var play: HTMLElement = document.getElementById("playButton");
var stoppen: HTMLElement = document.getElementById("stopButton");
var aufnehmen: HTMLElement = document.getElementById("recordButton");
var aufnehmenstopp: HTMLElement = document.getElementById("whileRecord");
var löschen: HTMLElement = document.getElementById("deleteButton");

// Klick auf RecordButton
aufnehmen.addEventListener("click", function (): void {
    if (aufnehmen.classList.contains(".active")) {
        aufnehmen.classList.remove(".active");
        recordactive = false;
    }
    else {
        aufnehmen.classList.add(".active");
        recordactive = true; 
    }
    recordBeat(x);
});

// Löscht den aktuell definierten Beat
löschen.addEventListener("click", function (): void {
    deleteBeat();
    });

// Klick auf PlayButton wird zu StopButton und andersrum
play.addEventListener("click", function (): void {
    PlayBeat(true);
    this.classList.add("is-hidden");
    stoppen.classList.remove("is-hidden");
    });

stoppen.addEventListener("click", function (): void {
    PlayBeat(false);
    this.classList.add("is-hidden");
    play.classList.remove("is-hidden");
});
    

// Funktion fürs Aufnehmen

// tslint:disable-next-line: typedef
function recordBeat (x) {
    if (recordactive == true) {
    sample.push(x);
}
}
// Funktion fürs Löschen
function deleteBeat(): void {
sample.splice(0, sample.length);
}
    
// Funktion Play and Stop

// tslint:disable-next-line: typedef
function PlayBeat(a): void {
    if (a == true) {
        // tslint:disable-next-line: typedef
        intervall = setInterval(function (): void {
            if (x < sample.length) {
                playSample(sample[x]);
                x++;
            }
            else {
                x = 0;
            }
        },                      500);
    }
    else {
        clearInterval(intervall);
    }}
















