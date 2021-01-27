
namespace Präsentation {
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


function myFunction(meters: number) {

var text: string = "Die Zahl ist: "
var result = text + meters; 
}

myFunction(30);
console.log(myFunction);


}
