var addTask = document.querySelector("#inputtask");
var totalindex = 0;
var liElement = document.querySelector(".element");
var iconADD = document.querySelector("i");
iconADD.className = "fas fa-plus";
function total() {
    document.querySelector("h3").innerHTML = totalindex + " are open";
}
function placeholder() {
    addTask.value = "";
}
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
        totalindex--;
        total();
    });
    totalindex++;
    total();
}
// Event-Listener fürs Abschicken des Textfelds
iconADD.addEventListener("click", function () {
    newTask();
    placeholder();
});
addTask.addEventListener("keypress", function (event) {
    if (event.code === "Enter") {
        newTask();
        placeholder();
    }
});
//# sourceMappingURL=ToDo.js.map
//# sourceMappingURL=TypeScript.js.map
//# sourceMappingURL=aufgabe9.js.map