namespace L11 {

interface MyInterface {
    todosText: string;
    todosChecked: boolean; 
    }

let myArray: MyInterface[] = [
    {
        todosText: "Putzen",
        todosChecked: true
    },
    {
        todosText: "Einkaufen",
        todosChecked: false
    },
    {
        todosText: "Lernen",
        todosChecked: false
    }
];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var openDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;



window.addEventListener("load", function(): void {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");


    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();

});


function drawListToDOM(): void {
    // alle todos erst einmal aus dem DOM löschen
    todosDOMElement.innerHTML = "";

    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (let index: number = 0; index < myArray.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + myArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                            + myArray[index].todosText + 
                            "<span class='trash fas fa-trash-alt'></span>";

        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
            
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}
function updateCounter(): void {
    let opentasks: number = 0; 
    let donetasks: number = 0;

    for (let index: number = 0; index < myArray.length; index++) {
        if ( myArray[index].todosChecked == true) {
            donetasks ++;
        }
        else (
            opentasks ++
        );
    }
    
    counterDOMElement.innerHTML = myArray.length + " in total";
    doneDOMElement.innerHTML = donetasks + " tasks done";
    openDOMElement.innerHTML = opentasks + " tasks open";
   }
   


/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo(): void {

    if (inputDOMElement.value != "") {
        myArray.unshift({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
      
        
        // Jetzt wird der Text aus dem Eingabefeld gelöscht
        inputDOMElement.value = "";
        drawListToDOM();
    }
}

/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index: number): void {

   myArray[index].todosChecked = !myArray[index].todosChecked;
   drawListToDOM();
}

/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index: number): void {
   
    myArray.splice(index, 1);
    drawListToDOM();
}


// Arytom Sprachassistenten

declare var Artyom: any;



window.addEventListener("load", function(): void {

    const artyom: any = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            myArray.unshift({
                todosText: wildcard,
                todosChecked: false
            });
            drawListToDOM();
        }

});

    window.addEventListener("load", function(): void {
artyom.stopCommands({
    indexes: ["Spracherkennung beenden"]
});
stopArtyom();
console.log("Spracherkennung wurde beendet");

});

    /*artyom.stopCommands({
        indexes: ["Spracherkennung beenden *"],
        smart: false,
        listen: false,
        action: function(i: any): void {
            console.log("Die Spracherkennung wird gestoppt ");
            stopArtyom();
        }
    });
    */


        
    function startArtyom(): void {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true
    });
    }

    function stopArtyom(): void {
        artyom.fatality(); 
        console.log("Artyom wurde gestoppt");
    }

    document.getElementById("record").addEventListener("click", function(): void {
    startArtyom();
    artyom.say("Sage Erstelle Aufgabe");

    });

    document.getElementById("stop").addEventListener("click", function(): void {
        stopArtyom();
        artyom.say("Die Spracherkennung wurde gestoppt");
    
        });

    });
}