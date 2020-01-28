// SET LOCAL STORAGE ITEM
// persists after user closes browser
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// SET SESSION STORAGE ITEM
// exists only as long as there is an active session
sessionStorage.setItem('name', 'Beth');

// REMOVE FROM STORAGE
// localStorage.removeItem('name')

// CLEAR ALL STORAGE
// localStorage.clear();

// GET FROM STORAGE
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name, age);

document.querySelector('form').addEventListener('submit',
  function (e) {
    const task = document.getElementById('task').value;

    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      // using JSON.parse we can take the string saved as tasks and turn it into an array to work with
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    // to save the JSON object we will have to reconvert it to a string
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task Saved');
    e.preventDefault();
  });
// then do use it as an object again we will re-parse the json string back into an object 
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function (task) {
  console.log(task);
});