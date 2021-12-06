var formEl = document.querySelector ("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function (event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("Input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create list item 
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info
    var taskInfoEl = document.createElement("div");
    // git it a name
    taskInfoEl.className = "task-info";
    // add html content 
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

}

formEl.addEventListener("submit", createTaskHandler); {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild (listItemEl);
};


