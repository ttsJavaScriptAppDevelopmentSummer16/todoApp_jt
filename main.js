var q = document.querySelector.bind(document);

var addTaskBtn = q('#addTaskBtn');
var removeTaskBtn = q('#removeTaskBtn');
var userInput = q('#newTask');
var taskList = q('#list');

var error = q('.error');

function addTask (e) {
  e.preventDefault();
  if (userInput.value === ""){
    error.innerHTML = 'Please enter a task.';
    error.classList.add('showError');
  } else {
    var newTask = document.createElement('li');
    newTask.innerHTML = userInput.value;

    taskList.appendChild(newTask);
    userInput.value = null;
    error.classList.remove('showError');
  }
  
}

function removeLastTask (e) {

  e.preventDefault();
  if (taskList.childElementCount <= 0){
    error.innerHTML = 'There are no tasks in the list.';
    error.classList.add('showError');
  }else {
    var lastTask = taskList.lastElementChild;
    lastTask.classList.add('strikeOut');

    setTimeout(function(){
      lastTask.remove();
    }, 1000); 
  }
}

function removeTask (e){
  var currentTask = e.target;
  currentTask.classList.add('strikeOut');

  setTimeout(function(){
      currentTask.remove();
    }, 900); 
  
}

addTaskBtn.addEventListener('click', addTask);
removeTaskBtn.addEventListener('click', removeLastTask);
taskList.addEventListener('click', removeTask);



