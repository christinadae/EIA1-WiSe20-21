var addTask: HTMLElement = document.getElementById("inputtask");
var iconADD: HTMLElement = document.querySelector("i");
iconADD.className = "fas fa-plus";
  
iconADD.addEventListener("click", function (): void {
  newTask();
  });
document.addEventListener("keydown", function (event: KeyboardEvent): void {
    if (event.keyCode == 13) {
        newTask();
    }
});
  
 // Funktion: Neue Aufgabe wird 
function newTask(): void {

    var container: HTMLDivElement = document.createElement("div");
    var circle: HTMLElement = document.createElement("i");
    circle.className = "far fa-circle";
    var check: HTMLElement = document.createElement("i");
    check.className = "far fa-check-circle inactive";
    var text: HTMLElement = document.createElement("span");
    text.innerHTML = addTask.value;
    var trash: HTMLElement = document.createElement("i");
    trash.className = "fas fa-trash-alt";

    //Icons werden mit dem Textfeld hinugefügt
    document.body.appendChild(container);
    container.appendChild(circle);
    container.appendChild(check);
    container.appendChild(text);
    container.appendChild(trash);
    
    // Icon-Nutzung

    circle.addEventListener("click", function (): void {
        this.classList.add("inactive");
        check.classList.remove("inactive");
    });
    check.addEventListener("click", function (): void {
        this.classList.add("inactive");
        circle.classList.remove("inactive");
    });
    trash.addEventListener("click", function (): void {
        document.body.removeChild(container);
  
    });
}






  //# sourceMappingURL=TypeScript.js.map
