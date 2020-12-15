var input = document.getElementById("input");
var addToDo;
addToDo.addEventListener("keypress", function () {
    var text = document.createElement("text");
    text.innerText = input.value;
    addToDo.appendChild(text);
});
//# sourceMappingURL=aufgabe9.js.map