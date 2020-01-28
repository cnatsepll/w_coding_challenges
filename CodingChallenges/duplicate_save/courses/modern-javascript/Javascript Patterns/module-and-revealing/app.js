// the idea is to break up our code into private modules that can be accessed sperately 
// each module can be its own controller

// Basic Structure
//immedietly invoked function expression IIFE, runs as soon as it is defined
// also known as a Self-Executing Anonymous Function
// first we set the anonymous function within the Grouping Operator '()'
// this will prevent accessing the variables with the IIFE 
// second we create the immediately executing functin expression '();'
// telling JS to immedietly interpet the function
// uses Lexical Scoping
// this means that the variable can not be refferenced outside
// of the block of code in which it is defined
//
// so we make a group ()
// in the group we declare a function
// outside the group we execute ();
// (function(){})();
(function(){
  // Declare private vars and functions
  return {
    // Declare public var and functioins
  }
})();


// STANDARD MODULE PATTERN
// IIFE Function 
const UIController = (function(){
  let text = 'Hello World';
  // internal function is private 
  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }
  // return public function
  return {
    callChangeText: function() {
      // we can access the private method from within our function
      changeText();
      console.log(text);
    }
  }
})();
// calling the UIControler public function
UIController.callChangeText();
// while we can call UIController.callChangeText()
// we can not call UIController.changeText()
// if we try to call UIController.text to try and access the property we will get 'undefined'




// REVEALING MODULE PATTERN
// instead of returning public functions, you map an object litteral
// mapped to private functions that you want to reveal
// this pattern is cleaner than the standard Module pattern, 
// however the stanard pattern does allow for more customization of the return 
const ItemController = (function () {
  // this data var can be thought of as our state
  // sometimes private variables like the one below are prefaced with an underscore
  // _data would let advanced users know that this is a private variable
  let data = [];

  function add(item){
    data.push(item);
    console.log('Item Added');
  }

  function get(id) {
    // the js find() method will return the value of the first element in the array
    // that meets the testing operation included in the function
    return data.find(item => {
      return item.id === id;
    });
  }

  // in this object literal we will set the methods/properties/elements we want to be revealed
  // any function not mapped to the object litteral will be kept private
  return {
    add: add, 
    get: get
  }
})();
//
// Caling the embedded methods through the return object
ItemController.add({id: 1, name: 'John'});
ItemController.add({id: 2, name: 'Basket' });
console.log(ItemController.get(1));

