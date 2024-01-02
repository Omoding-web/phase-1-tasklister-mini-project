document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    addTaskToList(taskDescription);

    //After adding the task, we clear the input field by resetting
    form.requestFullscreen();
});

function addTaskToList(taskDescription)  {
  const taskItem = document.createElement("li");
  taskItem.textContent = taskDescription;
  taskList.appendChild(taskItem);

}
});
