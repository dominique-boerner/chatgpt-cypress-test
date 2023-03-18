const todoListEl = document.querySelector(".todo-list");
const addTodoBtnEl = document.querySelector(".btn-add-todo");
const todoInputEl = document.querySelector(".input-todo");

const _state = {
    todos: [],
    newTodo: ""
}

const handler = {
    set(obj, prop, value) {
        obj[prop] = value;
        render();
    },
};

const state = new Proxy(_state, handler);

// This will be called initially.
(() => {
    addTodoBtnEl.addEventListener("click", () => addTodo(todoInputEl.value));
})();

const addTodo = (todo) => {
    state.todos = [...state.todos, todo];
    render();
}

const render = () => {
    todoListEl.innerHTML = "";
    state.todos.forEach(todo => {
        const todoEl = document.createElement("li");
        todoEl.textContent = todo;
        todoListEl.appendChild(todoEl);
    });
    todoInputEl.value = "";
}



