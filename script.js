const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
const list = document.querySelector("[data-list]")


//Arrow funtions o funciones anonimas
const createTask = (evento) => {
    evento.preventDefault();
    const value = input.value;
    const task = document.createElement("li");
    task.classList.add("card")
    input.value = "";
    //Template strings o plantilla
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;

    list.appendChild(task);

    console.log(content);
}

console.log(btn);

btn.addEventListener("click", createTask);