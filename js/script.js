// seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const EditForm = document.querySelector("#edit-form");
const EditInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

// funções
const saveTodo = (Text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todotitle = document.createElement("h3");
    todotitle.innerText = Text;
    todo.appendChild(todotitle);

    // console.log(todotitle);


    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();

};

const toogleForms = () => {
    EditForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};

const updateTodo = (Text) => {

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {
        let todotitle = todo.querySelector("h3");

        if(todotitle.innerText === oldInputValue) {
            todotitle.innerText = Text;
        };
    });

};

// eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue);
        //save todo
    }

});

document.addEventListener("click", (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todotitle;

    if(parentEl && parentEl.querySelector("h3")) {
        todotitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }

    if(targetEl.classList.contains("edit-todo")) {
        toogleForms();

        EditInput.value = todotitle;
        oldInputValue = todotitle;
    };
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toogleForms();
});

EditForm.addEventListener("submit", (e) => {

    e.preventDefault()

    const EditInputValue = EditInput.value

    if(EditInputValue) {
        updateTodo(EditInputValue) 
    }

    toogleForms()

})