var L11;
(function (L11) {
    var myArray = [
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
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    var openDOMElement;
    var doneDOMElement;
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        openDOMElement = document.querySelector("#open");
        doneDOMElement = document.querySelector("#done");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    function drawListToDOM() {
        // alle todos erst einmal aus dem DOM löschen
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index_1) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + myArray[index_1].todosChecked + "'><i class='fas fa-check'></i></span>"
                + myArray[index_1].todosText +
                "<span class='trash fas fa-trash-alt'></span>";
            // Zuweisen der Event-Listener für den Check- und den Trash-Button
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index_1);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index_1);
            });
            todosDOMElement.appendChild(todo);
        };
        // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
        for (var index_1 = 0; index_1 < myArray.length; index_1++) {
            _loop_1(index_1);
        }
        updateCounter();
    }
    function updateCounter() {
        var opentasks = 0;
        var donetasks = 0;
        for (var index_2 = 0; index_2 < myArray.length; index_2++) {
            if (myArray[index_2].todosChecked == true) {
                donetasks++;
            }
            else
                (opentasks++);
        }
        counterDOMElement.innerHTML = myArray.length + " in total";
        doneDOMElement.innerHTML = donetasks + " tasks done";
        openDOMElement.innerHTML = opentasks + " tasks open";
    }
    /**
     * Ein neues ToDo wird folgendermaßen erstellt:
     */
    function addTodo() {
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
    function toggleCheckState(index) {
        myArray[index].todosChecked = !myArray[index].todosChecked;
        drawListToDOM();
    }
    /**
     * Diese Funktion löscht ein ToDo
     */
    function deleteTodo(index) {
        myArray.splice(index, 1);
        drawListToDOM();
    }
    window.addEventListener("load", function () {
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                myArray.unshift({
                    todosText: wildcard,
                    todosChecked: false
                });
                drawListToDOM();
            }
        });
        function startArtyom() {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            });
        }
        function stopArtyom() {
            artyom.fatality();
        }
        document.getElementById("record").addEventListener("click", function () {
            startArtyom();
            artyom.say("Sage Erstelle Aufgabe");
        });
        document.getElementById("stop").addEventListener("click", function () {
            stopArtyom();
            artyom.say("Die Spracherkennung wurde gestoppt");
        });
    });
})(L11 || (L11 = {}));
//# sourceMappingURL=aufgabe11.js.map