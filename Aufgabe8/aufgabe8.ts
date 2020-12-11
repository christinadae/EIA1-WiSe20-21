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

document.querySelector(".button1").addEventListener("click", function (): void {
    playSample(button[1]);
    recordBeat(button[1]);
    
});
document.querySelector(".button2").addEventListener("click", function (): void {
    playSample(button[2]);
    recordBeat(button[2]);
});
document.querySelector(".button3").addEventListener("click", function (): void {
    playSample(button[3]);
    recordBeat(button[3]);
});
document.querySelector(".button4").addEventListener("click", function (): void {
    playSample(button[4]);
    recordBeat(button[4]);
});
document.querySelector(".button5").addEventListener("click", function (): void {
    playSample(button[5]);
    recordBeat(button[5]);
});
document.querySelector(".button6").addEventListener("click", function (): void  {
    playSample(button[6]);
    recordBeat(button[6]);
});
document.querySelector(".button7").addEventListener("click", function (): void {
    playSample(button[7]);
    recordBeat(button[7]);
});
document.querySelector(".button8").addEventListener("click", function (): void {
    playSample(button[8]);
    recordBeat(button[8]);
});
document.querySelector(".button9").addEventListener("click", function (): void {
    playSample(button[9]);
    recordBeat(button[9]);
});

// PlaySample Funktion
function playSample (x: HTMLAudioElement): void  {
x.play();
}

// Array für den Beat

// tslint:disable-next-line: typedef
var sample  = [];
sample [0] = new Audio("./assets/hihat.mp3"); 
sample [1] = new Audio("./assets/kick.mp3"); 
sample [2] = new Audio("./assets/snare.mp3"); 

// Alle Variablen


var recordactive: boolean;
var intervall: number = 0; 
var x: HTMLAudioElement;  


// Variablen Definition für die Buttons

var play: HTMLElement = document.querySelector(".playButton");
var stoppen: HTMLElement = document.querySelector(".stopButton");
var aufnehmen: HTMLElement = document.querySelector(".recordButton");
var löschen: HTMLElement = document.querySelector(".deleteButton");

// Klick auf RecordButton

aufnehmen.addEventListener("click", function (): void {
    
    if (aufnehmen.classList.contains("active")) {
        aufnehmen.classList.remove("active");
        recordactive = false;
    }
    else {
        aufnehmen.classList.add("active");
        recordactive = true; 
    }
    
    recordBeat(x);
    console.log(recordactive);
    console.log(sample.length);

});

// Löscht den aktuell definierten Beat
löschen.addEventListener("click", function (): void {
    deleteBeat();
    });

// Klick auf PlayButton wird zu StopButton und andersrum
play.addEventListener("click", function (): void {
    PlayBeat(true);
    play.classList.add("inactive");
    stoppen.classList.remove("inactive");
    });

stoppen.addEventListener("click", function (): void {
    PlayBeat(false);
    stoppen.classList.add("inactive");
    play.classList.remove("inactive");
});
    

// Funktion fürs Aufnehmen
function recordBeat (x: HTMLAudioElement): void {
    console.log(recordactive);
    if (recordactive == true) {
    sample.push(x);
    console.log(sample.length);
}
}
// Funktion fürs Löschen
function deleteBeat(): void  {
sample.splice(0, sample.length);
console.log(sample.length);
}
    
// Funktion Play and Stop
function PlayBeat(a: boolean): void {
    if (a == true) {
    intervall = setInterval(function (): void {
    if (intervall < sample.length) {
    playSample(sample[intervall]);
    intervall++;
    }
    else {
    intervall = 0;
    }
    },                      500);
    }
    else {
        clearInterval(intervall);
    }}
















