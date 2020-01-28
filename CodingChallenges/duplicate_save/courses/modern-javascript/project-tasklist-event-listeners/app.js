// DEFINE UI VARIABLES
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn   = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// LOAD ALL EVENT LISTENERS
loadEventListeners();

// Load All Event Listeners Function Declaration
function loadEventListeners(){
  // DOM LOAD EVENT
  // loads exising list items from local storage on page load
  // DOMContentLoaded is an event that is called when the page loads up
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks); 
}

// Get Tasks from LS (localStorage) function declaration
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // once we have our task list loaded we will itterate through it to populate the list
  tasks.forEach(function(task){
    // Create Li Element
    const li = document.createElement('li');
    // Add class tp li
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class to link
    link.className = 'delete-item secondary-content';
    // add icon html to link
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to the li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);
  });
}

// Add Task function declaration
function addTask(e) {
  if(taskInput.value === ''){
    alert('Please add a task');
  }
  // Create Li Element
  const li = document.createElement('li');
  // Add class tp li
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class to link
  link.className = 'delete-item secondary-content';
  // add icon html to link
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to the li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);

  // STORE IN LOCAL STORAGE
  storeTaskInLocalStorage(taskInput.value);

  // Clear Input 
  taskInput.value = '';
  // prevent the form from submitting
  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task){
  let tasks;
  // check if there are already tasks in local storage
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // add tasks onto existing tasks
  tasks.push(task);
  // save updated task list to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Remove Task Function Declaration
function removeTask(e){
  // if the element clicked on is an element with the remove icon
  // then we want to remove that element from the task list
  // in this case we are looking at the parent element of the target 
  // because we want to check the element's wrapper for the specified class
  if(e.target.parentElement.classList.contains('delete-item')){
    // just for added confirmation we will prompt the user to confirm they want to remove that element
    if(confirm('Are You Sure?')){
      // after checking we met our parameters we can remove the task list container from the list
      e.target.parentElement.parentElement.remove();
      // after we remove the task from the DOM we will want to remove it from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove task from local storage function declaration
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      // removes one item from the array at the index of the found taskItem to remove
      tasks.splice(index, 1);
  }
});
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks Function Declaration
function clearTasks(){
  //taskList.innerHTML = '';
  // or a slightly faster method
  // while our task list still has an element
  // we will itterate through it and remove an element 
  // until there are no more elements in the list
  while (taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  clearTasksFromLocalStorage();
}

// Clear tasks from local storage function decleration
function clearTasksFromLocalStorage(){
  localStorage.clear();
}

// Filter Tasks Function Declaration
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  // We will be looking at an array of all the collection items in the document
  // for each item we will be comparing the text inside with the user entered text
  // if the lowercase versions of each string match (aka do not give an index of -1)
  // then we will show that item when the list is filtered
  document.querySelectorAll('.collection-item').forEach(function(task){
    // here we are in a for each loop, looking at the text of each list element
    const item = task.firstChild.textContent;
    // if that text exists in the user entered string then we will display it
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      // if there is no matching text then we will hide it
      task.style.display = 'none';
    }
  });
}