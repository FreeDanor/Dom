import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

// Immediately invoked function expression IIFE
( () => {

const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
const list = document.querySelector("[data-list]")

//Arrow funtions o funciones anonimas
const createTask = (event) => {
    event.preventDefault();
    const value = input.value;
    const task = document.createElement("li");
    task.classList.add("card")
    input.value = "";
    //Template strings o plantilla
    const taskContent = document.createElement("div");
    const titletask = document.createElement("span");
    titletask.classList.add("task");
    titletask.innerText = value
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titletask);
    //task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
}

btn.addEventListener("click", createTask);

})()