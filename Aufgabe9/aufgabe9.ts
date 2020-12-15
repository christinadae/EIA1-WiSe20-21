let input: HTMLElement = document.getElementById("input");
let addToDo: HTMLElement;

addToDo.addEventListener("keypress", function(): void {
var text: HTMLElement = document.createElement("text");
text.innerText = input.value; 
addToDo.appendChild(text);

});