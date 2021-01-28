
namespace powerpoint2 {
// .innerHTML selektiert das Element und ein überschreibt diesen mit einem neuen Wert (string)

document.querySelector("h1").innerHTML = "Eine neue Überschrift";

// .querySelector selektiert ein entsprechendes DOM-Element per Tag-Selektor.
// Hier wurde der Tag h1 selektiert

//.getElementById => Greift direkt auf ein Element zu, dass durch sein id-Attribut eindeutig identifiziert ist

//.getElementbyClassName =>  gibt eine Liste von Elementen zurück, die der angegebenen Klasse entsprechen

document.querySelector("h1").setAttribute("align", "center");

// Fügt dem angegebenen Element ein Attribut hinzu oder ändert den Wert eines vorhandenen Attributs

var button: HTMLButtonElement = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "Ein neuer Button";   

// .createElement erstellt ein ganz neues Element
// .appendChild fügt ein Element zum Body hinzu


function myFunction() {
document.querySelector("h1").setAttribute("style", "color: red");
}


document.querySelector("h1").addEventListener("click", myFunction);


//                 Indizes:         0                1             2


var studentin: string = {
    hochschule: "HFU",
    studiengang: "Medienkonzeption",
    lieblingskurs: "Mediengestaltung"
};

interface myInterface {

hochschule: string;
immatrikuliert: boolean;
studiengang: string;
semester: number;
kurse: string[];
}

var studentin: myInterface = {
    hochschule: "HFU",
    immatrikuliert: true,
    studiengang: "Medienkonzeption",
    semester: 1,
    kurse: ["Audiotechnik", "Mediengestaltung", "Medienpsychologie"]
};

}
