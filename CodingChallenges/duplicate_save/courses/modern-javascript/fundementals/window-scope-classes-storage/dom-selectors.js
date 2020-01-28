// GET ELEMENT BY ID
console.log(document.getElementById('task-title'));

// Get things from the Element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// its more effecient to reduce the number of calls to the dom as much as possible
// one good way to do that is to turn a call into a variable and then to use that variable elsewhere instead of the call
const tastTitle = document.getElementById('task-title');


// Change Element Styling
console.log(document.getElementById('task-title').style.background = '#333');
console.log(document.getElementById('task-title').style.color = '#fff');
console.log(document.getElementById('task-title').style.padding = '5px');
console.log(document.getElementById('task-title').style.display = 'none');

// Change Element Content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';


// QUERY SELECTOR
// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card'));
// if there is more than one element, querySelector will only pull the first
console.log(document.querySelector('h5'));

// selects the first found 'li' element
document.querySelector('li').style.color = 'red';
// more descriptive pull
document.querySelector('ul li').style.color = 'red';
// selects the last found 'li' element using css psuedo variables
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'hello world';


// SELECTING MULTIPLE ELEMENTS
//selecting from the global scope
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'green';
items[3].textContent = 'Hello';
// selecting from a specific part of the document
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);
// selecting elements by Tag Name
let lis = document.getElementsByTagName('li');
console.log('lists', lis);
console.log(lis[0]);
lis[0].style.color = 'green';
lis[4].textContent = 'new Text';

// Convert HTML Collection to Array
lis = Array.from(lis);
lis.reverse();
lis.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index}  :  changed in array update`;
});


// QUERY SELECTOR ALL
const newItems = document.querySelectorAll('ul.collection li.collection-item');
newItems.forEach(function (item, index) {
  item.textContent = `${index}:  updated again`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
liOdd.forEach(function (li, index) {
  li.style.background = '#ccc';
});
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}