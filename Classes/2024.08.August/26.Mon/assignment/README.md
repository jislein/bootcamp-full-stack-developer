# Practice Challenge

Create an interactive To-Do List that marks completed tasks.

## Challenge Goal

Create a To-Do List app that allows to add tasks and mark them as completed. You will need to complete parts of the code for the app to work correctly. Those parts are marked with a comment that says:

```/*TODO: Hint to solve*/```

Starting code:

HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>To-Do List App</title>
    <!--TODO: Importar CSS -->
</head>
<body>
    <h1>To-Do List</h1>
    <input type="text" id="newTaskInput" placeholder="Añade una nueva tarea aquí...">
    <button id="addTaskButton">Añadir Tarea</button>
    <ul id="taskList"></ul>

    <!--TODO: Importar script -->
</body>
</html>
```

CSS:
```css
body {
    font-family: Arial, sans-serif;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 8px 0;
    background-color: #f4f4f4;
    padding: 10px;
    cursor: pointer;
}

li.completed {
    text-decoration: line-through;
}
```

JavaScript:
```js
/*TODO: Get Button Element By Id*/.('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('newTaskInput');
    const newTask = taskInput.value.trim();

    if (newTask) {
        addTask(newTask);
        taskInput.value = ''; // Limpiar el campo de entrada después de añadir la tarea
    } else {
        alert('Por favor, ingresa una tarea.');
    }
});

function addTask(taskDescription) {
    const taskList = document.getElementById('taskList');
    const newListItem = document./*TODO: Create a new element*/.('li');
    newListItem.textContent = taskDescription;

    newListItem./*TODO: Add new event listener*/(/*TODO: click event*/, function() {
        this.classList.toggle('completed');
    });

    taskList./*TODO: Append a new child*/(newListItem);
}
```
