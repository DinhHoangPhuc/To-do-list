let add = document.getElementById("add");
let input = document.getElementById("input");
let toDoList = document.querySelector("ul");
let toDo = document.getElementsByClassName("to-do");
let close = document.getElementsByClassName("btn");

const newElement = () => {
  const inputValue = input.value;
  if (inputValue == "") {
    alert("You must type something !");
  } else {
    const addedEl = document.createElement("li");
    const addBTn = document.createElement("span");

    addedEl.classList.add("to-do");
    addBTn.classList.add("btn");

    addedEl.innerText = inputValue;
    addBTn.innerText = "Delete";
    addedEl.appendChild(addBTn);
    toDoList.appendChild(addedEl);
    input.value = "";

    for (const item of close) {
      item.onclick = function () {
        this.parentElement.style.display = "none";
      };
    }
  }
};

toDoList.addEventListener("click", (item) => {
  if (item.target.tagName === "LI") {
    item.target.classList.toggle("checked");
  }
});
