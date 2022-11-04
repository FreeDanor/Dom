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

export default checkComplete;