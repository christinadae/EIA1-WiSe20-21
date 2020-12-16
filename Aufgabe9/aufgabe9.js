var addTask = document.getElementById("inputtask");
var iconADD = document.querySelector("i");
iconADD.className = "fas fa-plus";
iconADD.addEventListener("click", function () {
    newTask();
});
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        newTask();
    }
});
// Funktion: Neue Aufgabe wird 
function newTask() {
    var textfield = document.createElement("div");
    var circle = document.createElement("i");
    circle.className = "far fa-circle";
    var check = document.createElement("i");
    check.className = "far fa-check-circle inactive";
    var text = document.createElement("span");
    text.innerHTML = addTask.value;
    var trash = document.createElement("i");
    trash.className = "fas fa-trash-alt";
    //Icons werden mit dem Textfeld hinugefügt
    document.body.appendChild(textfield);
    textfield.appendChild(circle);
    textfield.appendChild(check);
    textfield.appendChild(text);
    textfield.appendChild(trash);
    // Icon-Nutzung
    circle.addEventListener("click", function () {
        this.classList.add("inactive");
        check.classList.remove("inactive");
    });
    check.addEventListener("click", function () {
        this.classList.add("inactive");
        circle.classList.remove("inactive");
    });
    trash.addEventListener("click", function () {
        document.body.removeChild(textfield);
    });
}
//# sourceMappingURL=TypeScript.js.map
//# sourceMappingURL=aufgabe9.js.map