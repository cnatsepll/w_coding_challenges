// REPLACE ELEMENT
// Create Element
const newHeading = document.createElement('h2');
// Ad ID
newHeading.id = 'task-title';
// New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

// GET ELEMENT TO BE REPLACED
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');


// REPLACE OLD ELEMENT WITH NEW ELEMENT
cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove list item
lis[0].remove();
// Remove child element
list.removeChild(lis[3]);



// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
// Classes
let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;
// Attributes
val = link.setAttribute('title', 'modern words');
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
// hasAttribute will return either true or false
val = link.hasAttribute('href');



console.log(val);
