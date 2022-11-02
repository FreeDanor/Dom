const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

//Arrow funtions o funciones anonimas
const createTask = (evento) => {
    evento.preventDefault();
    console.log(input.value);
}

console.log(btn);

btn.addEventListener("click", createTask);