// make a plan points to function , array, object, event

//======= variables ==============
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const todoItems = [];

//======= functions ==========
function Todo(name, IsComplited) {
    this.name = name;
    this.IsComplited = IsComplited;
}

function addNewTodo() {
    const todoInputValue = todoInput.value;
    console.log(todoInputValue);
    // if (todoInputValue === "") {
    if (!todoInputValue) {
        alert("Please enter value")
        return;
    }
    const newTodo = new Todo(todoInputValue, false);

    todoItems.push(newTodo);
    todoInput.value = "";
}

function renderTodos() {
    todoList.innerHTML = "";
    let htmlBuilder = "";
    for (let i = 0; i < todoItems.length; i++) {
       // todoList.innerHTML += '<ul></ul>'
       let todo = todoItems[i];
       htmlBuilder += `<li>`
       if (todo.IsComplited) {
        htmlBuilder += ` <input type="checkbox" name="" checked> 
        <span><del>${todo.name}</del></span> `
       } else {
         htmlBuilder += ` <input type="checkbox" name=""> 
        <span><del>${todo.name}</del></span> `
       }
    }
    todoList.innerHTML = htmlBuilder;
}
function renderTodos() {
    todoList.innerHTML = "";
    let htmlBuilder = "";
    for (let i = 0; i < todoItems.length; i++) {
        let todo = todoItems[i];
        // todoList.innerHTML += `<li>`
        htmlBuilder += `<li>`
        if (todo.isCompleted) {
            htmlBuilder += `
                <input type="checkbox" data-todoindex="${i}" checked>
                <span><del>${todo.name}</del></span>
            `
        } else {
            htmlBuilder += `
                <input data-todoindex="${i}" type="checkbox">
                <span>${todo.name}</span>
            `
        }
        htmlBuilder += `</li>`
    }

    todoList.innerHTML = htmlBuilder;

}

function toggleTodoStatus(index) {
    const todo = todoItems[index];
    todo.isCompleted = !todo.isCompleted;
}
//======= events ========

// ========= EVENTS =========
addTodoBtn.addEventListener("click", function (event) {
    console.log(event);
    // event.preventDefault();
    // Logic for adding new Todo
    addNewTodo();

    // Logic for displaying Todos
    if (todoItems.length > 0){
    renderTodos();
    }
})

todoList.addEventListener("change", function(e) {
    console.log(e.target);
    console.log(e.target.dataset);

    const todoindex = e.target.dataset.todoindex ;
    toggleTodoStatus(todoindex);
    renderTodos();
    
})