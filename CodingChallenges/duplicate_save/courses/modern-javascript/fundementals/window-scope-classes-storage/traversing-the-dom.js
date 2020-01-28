let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// GET CHILD NODES
// returns a node list of all the nodes that are children of the selected element
// using childNodes will also return text elements like Line Breaks which we dont always want
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
// Node Type
// 1 = element
// 2 = Attribute (deprecated)
// 3 = Text Node 
// 8 = Comment
// 9 = Document itself
// 10 = Doctype
val = list.childNodes[0].nodeType;
// to return only the child elements as an HTML collection of elements we use children
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hi';
// getting children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];
// firstChild will return the first node
val = list.firstChild;
// or last
val = list.lastChild;
// firstElementChild will return the first element
val = list.firstElementChild;
// or last
val = list.lastElementChild;
// count of child elements
val = list.childElementCount;

// GET PARENT NODE
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// GET NEXT SIBLING
// a sibling is the next element node in the same tree level
// Sibling gives us a node, ElementSibling gives us an element
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
// GET PREVIOUS SIBLING
val = listItem.previousSibling;
val = listItem.previousElementSibling;




console.log(val);