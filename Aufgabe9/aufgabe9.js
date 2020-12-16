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
    var container = document.createElement("div");
    var circle = document.createElement("i");
    circle.className = "far fa-circle";
    var check = document.createElement("i");
    check.className = "far fa-check-circle inactive";
    var text = document.createElement("span");
    text.innerHTML = addTask.value;
    var trash = document.createElement("i");
    trash.className = "fas fa-trash-alt";
    //Icons werden mit dem Textfeld hinugefügt
    document.body.appendChild(container);
    container.appendChild(circle);
    container.appendChild(check);
    container.appendChild(text);
    container.appendChild(trash);
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
        document.body.removeChild(container);
    });
}
//# sourceMappingURL=TypeScript.js.map
//# sourceMappingURL=aufgabe9.js.map