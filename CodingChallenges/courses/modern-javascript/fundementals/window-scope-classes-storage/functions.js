//FUNCTION DECLARATIONS

// items in the parenthesis are parameters
//  everything in here is the function scope
// we can set defaults in the parameters with ES6
function greet(firstName = 'John', lastName = 'Doe') {
  //manual way of setting default parameters in case nothing is passed through
  if (typeof firstName === 'undefined') {
    firstName = 'John'
  }
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
};



// FUNCTION EXPRESSIONS

const square = function (x = 3) {
  return x * x;
};


// IMMEDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs (iffies)
// the function needs to have the empty parenthesis at the end to run
(function () {
  console.log('IIFE ran...');
})();
// they also take parameters
(function (name) {
  console.log('Hello ' + name);
})('aRealName');




// PROPERTY METHODS
// creating an object with internal functions
const todo = {
  add: function () {
    console.log('do something here');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`)
  }
}
// adding a function to an existing object
todo.delete = function () {
  console.log('Delete todo.....');

}

todo.add();
todo.edit(2);
todo.delete();


// calling functions
console.log(greet());
console.log(square(8));