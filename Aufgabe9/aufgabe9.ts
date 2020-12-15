var myList: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
var i: number;
for (i = 0; i < myList.length; i++) {
  var span: HTMLElement = document.createElement("SPAN");
  var txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close: HTMLCollectionOf<Element>  = document.getElementsByClassName("close");
var i: number;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(): void {
    var div: HTMLElement = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list: HTMLUListElement = document.querySelector("ul");
list.addEventListener("click", function(ev: MouseEvent): void {
  if (ev.target.tagName === ("LI") {
    ev.target.classList.toggle("checked");
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function(): void {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}