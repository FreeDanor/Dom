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
    taskContent.appendChild(checkComplete());
    const titletask = document.createElement("span");
    titletask.classList.add("task");
    titletask.innerText = value
    taskContent.appendChild(titletask);
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
}

btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click",completeTask)
    return i;
}

const completeTask = (event) => {
    const element = event.target
    //Target para seleccionar el elemento
    element.classList.toggle("fas");
    //la tag toggle revisa la clase (quita o pone)
    element.classList.toggle("completeIcon");
    //la clase completeIcon solo esta en el CSS
    element.classList.toggle("far");
}

})()