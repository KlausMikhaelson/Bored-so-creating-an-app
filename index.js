const form =  document.getElementById("main");
const inputName = document.getElementById("input");
const todoslist = document.getElementById("todolist")



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = inputName.value;

    if(todo) {
        const todoText = document.createElement("li")
        todoText.innerText =  todo;
        todoslist.appendChild(todoText)
    }
})