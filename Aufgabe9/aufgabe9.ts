var addTask: HTMLInputElement = document.querySelector("#inputtask");
var totalindex: number = 0;
var liElement: Element = document.querySelector(".element");
var iconADD: HTMLElement = document.querySelector("i");
iconADD.className = "fas fa-plus";

function total(): void {
    document.querySelector("h3").innerHTML = totalindex + " are open";
}
function placeholder(): void {
    addTask.value = "";
}

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

// Event-Listener fürs Abschicken des Textfelds

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




  //# sourceMappingURL=TypeScript.js.map
