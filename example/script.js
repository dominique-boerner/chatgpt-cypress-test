const todoListEl = document.querySelector(".todo-list");
const addTodoBtnEl = document.querySelector(".btn-add-todo");
const todoInputEl = document.querySelector(".btn-add-todo");

todos = [];
newTodo = "";

const addTodo = (todo) => {
    todos = [...todos, todo];
    render();
}

const updateNewTodo = (e) => {
    
    alert(e)
    newTodo = e.target.value;
}

const render = () => {
    todoListEl.innerHTML = "";
    todos.forEach(todo => {
        const todoEl = document.createElement("li");
        todoEl.textContent = todo;
        todoListEl.appendChild(todoEl);
    });
}



addTodoBtnEl.addEventListener("click", () => addTodo(newTodo));
todoInputEl.addEventListener("input", updateNewTodo);