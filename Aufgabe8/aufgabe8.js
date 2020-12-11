// Array Buttons
var L08;
(function (L08) {
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
    document.querySelector(".button1").addEventListener("click", function () {
        playSample(button[1]);
        recordBeat(button[1]);
    });
    document.querySelector(".button2").addEventListener("click", function () {
        playSample(button[2]);
        recordBeat(button[2]);
    });
    document.querySelector(".button3").addEventListener("click", function () {
        playSample(button[3]);
        recordBeat(button[3]);
    });
    document.querySelector(".button4").addEventListener("click", function () {
        playSample(button[4]);
        recordBeat(button[4]);
    });
    document.querySelector(".button5").addEventListener("click", function () {
        playSample(button[5]);
        recordBeat(button[5]);
    });
    document.querySelector(".button6").addEventListener("click", function () {
        playSample(button[6]);
        recordBeat(button[6]);
    });
    document.querySelector(".button7").addEventListener("click", function () {
        playSample(button[7]);
        recordBeat(button[7]);
    });
    document.querySelector(".button8").addEventListener("click", function () {
        playSample(button[8]);
        recordBeat(button[8]);
    });
    document.querySelector(".button9").addEventListener("click", function () {
        playSample(button[9]);
        recordBeat(button[9]);
    });
    // PlaySample Funktion
    function playSample(x) {
        x.play();
        recordBeat(x);
    }
    // Array für den Beat
    var sample = [];
    sample[0] = new Audio("./assets/hihat.mp3");
    sample[1] = new Audio("./assets/kick.mp3");
    sample[2] = new Audio("./assets/snare.mp3");
    var recordactive;
    var intervall = 0;
    var x;
    var a;
    var index;
    // Variablen Definition für die Buttons
    var play = document.querySelector(".playButton");
    var stoppen = document.querySelector(".stopButton");
    var aufnehmen = document.querySelector(".recordButton");
    var löschen = document.querySelector(".deleteButton");
    // Klick auf RecordButton
    aufnehmen.addEventListener("click", function () {
        if (aufnehmen.classList.contains("active")) {
            aufnehmen.classList.remove("active");
            recordactive = false;
        }
        else {
            aufnehmen.classList.add("active");
            recordactive = true;
        }
        console.log(recordactive);
        console.log(sample.length);
    });
    // Löscht den aktuell definierten Beat
    löschen.addEventListener("click", function () {
        deleteBeat();
    });
    // Klick auf PlayButton wird zu StopButton und andersrum
    play.addEventListener("click", function () {
        PlayBeat(true);
        play.classList.add("inactive");
        stoppen.classList.remove("inactive");
    });
    stoppen.addEventListener("click", function () {
        PlayBeat(false);
        stoppen.classList.add("inactive");
        play.classList.remove("inactive");
    });
    // Funktion fürs Aufnehmen
    function recordBeat(x) {
        console.log(recordactive);
        if (recordactive == true) {
            sample.push(x);
            console.log(sample.length);
        }
    }
    // Funktion fürs Löschen
    function deleteBeat() {
        sample.splice(0, sample.length);
        console.log(sample.length);
    }
    // Funktion Play and Stop
    function PlayBeat(a) {
        if (a == true) {
            intervall = setInterval(function () {
                if (index < sample.length) {
                    playSample(sample[index]);
                    index++;
                }
                else {
                    index = 0;
                }
            }, 500);
        }
        else {
            clearInterval(intervall);
        }
    }
})(L08 || (L08 = {}));
//# sourceMappingURL=aufgabe8.js.map