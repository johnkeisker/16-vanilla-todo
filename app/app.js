let todos = [];

document.querySelector("#toDoSubmit")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let infoField = document.querySelector("#toDoInput");
    console.log(infoField.value);
    let todo = new Todo(infoField.value);
    todos.push(todo);
    render();
  })


function Todo(item) {
  this.item = item;
  this.completed = false;
}

function render() {
  let list = document.querySelector("#toDo");
  list.innerHTML = "";
  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.textContent = todo.item;
    list.appendChild(li);
  })
}
render();
