var items: string [] = [];

var listactive: boolean;
var enter: Event;
var todolist: HTMLElement = document.getElementById("#ToDoList");


document.getElementById("#ToDoList").addEventListener("keypress", function (enter)
    if (enter.key === "Enter") {
    todolist.push(enter);
    }};
  



function onEnter(event: Event):void {
   
}
