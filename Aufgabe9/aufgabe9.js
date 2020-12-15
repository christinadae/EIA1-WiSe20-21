var iconcheck = document.querySelector("check");
var icontrash = document.querySelector("trash");
var text = document.createElement("text");
var iconADD = document.querySelector("add");
var container = document.createElement("div");
var addingTask = document.getElementById("inputtask");
iconADD.addEventListener("click", function () {
    createTask();
});
function createTask() {
    var container;
    var iconcheck;
    var icontrash;
    var text;
    document.body.appendChild(container);
    container.appendChild(iconcheck);
    container.appendChild(icontrash);
    container.appendChild(text);
    iconcheck.addEventListener("click", function () {
        iconcheck.classList.add("iconInactive");
        icontrash.classList.remove("iconInactive");
    });
    icontrash.addEventListener("click", function () {
        icontrash.classList.add("iconInactive");
        iconcheck.classList.remove("iconInactive");
    });
}
//# sourceMappingURL=TypeScript.js.map
//# sourceMappingURL=aufgabe9.js.map