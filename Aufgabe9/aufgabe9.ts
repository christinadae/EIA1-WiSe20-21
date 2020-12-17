var addTask: HTMLElement = document.getElementById("inputtask");
var iconADD: HTMLElement = document.querySelector("i");
iconADD.className = "fas fa-plus";
var totalindex: number = 0;
  
iconADD.addEventListener("click", function (): void {
  newTask();
  placeholder();
  });

addTask.addEventListener("keypress", function (event: KeyboardEvent): void {
    if (event.code === "Enter") {
        newTask();
        placeholder();
    }
});

function total(): void {
    document.querySelector("h3").innerHTML = totalindex + " in total";
} 
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
        totalindex--;
        total();
  
    });

    totalindex++;
    total();
}

function placeholder(): void {
    addTask.value = "";
}






  //# sourceMappingURL=TypeScript.js.map
