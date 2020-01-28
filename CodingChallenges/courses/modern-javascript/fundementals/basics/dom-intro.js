let val;
// creates an array of the elements within the page document
val = document.all;
val = document.all[3];
val = document.all.length;
val = document.head;
val = document.body;
val = document.domain;
val = document.doctype;
val = document.characterSet;
val = document.contentType;

// We can use this document variable to get special elements like forms
val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// or links
val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];
// or images
val = document.images;
// or scripts
val = document.scripts;
val = document.scripts[0].getAttribute('src');

// TURNING COLLECTIONS INTO ARRAYS
// this let will return a collection
let scripts = document.scripts;
// we can't for each through a collection so we will have to turn it into an array
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function (script) {
  console.log(script.getAttribute('src'));
});

console.log(val);