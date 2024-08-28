/*TODO: Get Button Element By Id*/
document.getElementById('addTaskButton').addEventListener('click', function() {
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
    /*DONE: Create a new element*/
    const newListItem = document.createElement('li');
    newListItem.textContent = taskDescription;
    /*DONE: Add new event listener*/
    /*DONE: click event*/
    newListItem.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
    /*DONE: Append a new child*/
    taskList.appendChild(newListItem);
}
