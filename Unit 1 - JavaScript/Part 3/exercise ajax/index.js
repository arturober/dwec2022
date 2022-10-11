// Web services http://arturober.com:5006/tareas
// GET all the todos and show them in the list
// When sending the form, generate a POST call and insert a new task
// OPTIONAL: Include a button to delete the task

fetch('http://arturober.com:5006/tareas')
.then(resp => resp.json())
.then(json => json.tareas.forEach(tarea => {
    addTarea(tarea);
}));

let ul = document.getElementById("todolist");

function addTarea(tarea) {
    let li = document.createElement("li");
    li.append(tarea.descripcion);
    ul.append(li);
}